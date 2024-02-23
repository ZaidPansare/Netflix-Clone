import { Link } from 'react-router-dom';
import Card from './Card'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Navbar from './Navbar'

const Home = ({search,setSearch,handleClick,data,cart,filteredData,setFilteredData}) => {

    

  return (
    <div>
        <Navbar  size={cart.length} data={data} setFilteredData={setFilteredData} setSearch={setSearch} />
        <Carousel>
            {filteredData.filter((item)=>item.title.toLocaleLowerCase().includes(search)).map((item)=>{
                return(
                    <header key={item.id} style={{height:'600px', width:'80%', margin:'auto'}}>
                        <div className='main-caro'>
                            <div className="image">
                            <Link to={`/about/${item.id}`}><img src={item.image} style={{width:'70%', height:"70%"}} alt="" /></Link>
                            </div>
                            <div className='desc'>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p>{item.price}Rs</p>
                                <p>{item.rating.rate}⭐</p>
                                <button onClick={()=>handleClick(item)}>Add cart</button>
                            </div>
                        </div>
                    </header>
                )
            })}
        </Carousel>
        
        <div className="sec">
        {filteredData.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
            return(
                <Card  handleClick={handleClick} key={item.id} item={item}/>
            )
        })}
        </div>
    </div>
  )
}

export default Home