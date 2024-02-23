import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({item,handleClick}) => {
    const {title,price,image,description,rating,id} = item
    const [open,setOpen] = useState(false)

  return (

    <div className='card'>
        <div>
        <Link to={`/about/${id}`}><img src={image} height={'200px'} width={'200px'} alt="" /></Link>
        <h5>{title}</h5>
        <p>{price}$</p>
        <p>{rating.rate}⭐</p>
        </div>
        
        <div>
        <button onClick={()=>handleClick(item)}>Add cart</button>
        <button onClick={()=> setOpen(!open)}>Read More</button>
        </div>

        {open &&(
          <div>
            <p>{description}</p>
            <button onClick={()=>setOpen(!open)}>Close</button>
          </div>
        )}
        
    </div>
    
  )
}

export default Card