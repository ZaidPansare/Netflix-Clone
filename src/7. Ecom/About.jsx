import { useParams } from "react-router-dom"
import './About.css'
import { Tilt } from 'react-tilt'
import Card from './Card'
import Navbar from './Navbar'


const About = ({Data,handleClick,aboutData}) => {

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

    const {Id} = useParams()
    const data = Data.find((data)=>data.id==parseInt(Id))
    

  return (
    <div className="About">
        <Navbar  />

        <div className="mainitem">
        <div className="top"> 
        <Tilt options={defaultOptions} style={{ height: 200, width: 200 }}>
        <img src={data.image}  alt="" />
        </Tilt>
        </div>

        <div className="bot">
            <h2>{data.title}</h2>
            <br />
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{data.rating.rate}⭐</p>
            <button onClick={()=>handleClick(data)}>Add Cart</button>
        </div>
        </div>
        <br />
        <br />
        <div className="moreitems">
        {Data.map((item)=>{
            return(
                <Card  handleClick={handleClick} key={item.id} item={item} />
            )
        })}
        </div>
    </div>
  )
}

export default About