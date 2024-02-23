import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './Images/AMZN_BIG.D-8fb0be81.png'
import { useState } from 'react'

const Navbar = ({setSearch,size,data,setFilteredData}) => {


  const filterResult =  (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setFilteredData(result)
  }

  const filterResult2 =  (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setFilteredData(result)
  }

  const filterResult3 =  (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setFilteredData(result)
  }

  const filterResult4 =  (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setFilteredData(result)
  }

  const [isOpen, setIsOpen] = useState(false)

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  const sortByPriceLtoH = () => {
    const Newdata = [...data]
    Newdata.sort((a, b) => a.price - b.price);
    setFilteredData(Newdata);
    setIsOpen(false);
  };

  const sortByPriceHtoL = ()=>{
    const Newdata = [...data]
    Newdata.sort((a, b) => b.price - a.price);
    setFilteredData(Newdata);
    setIsOpen(false);
  }

  const sortProductsAtoZ =()=> {
    const sortedProducts = [...data]
      sortedProducts.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return titleA.localeCompare(titleB);
    });
    setFilteredData(sortedProducts)
    setIsOpen(false);
  }


  return (
    <div className='parent-nav'>
      <nav className='navecom'>
        <article className='navart'>
        <div className='navdiv'><Link style={{color:'white', textDecoration:'none'}} to={'/'}>
          <img src={logo} alt="" /></Link>
        </div>
        <div className='navdiv'><input onChange={(e)=>setSearch(e.target.value)}
          type="search" placeholder='Search your products'/></div>
        <div className='navdiv'><Link style={{color:'white', textDecoration:'none'}} to={'/cart'}>
          🛒<sup style={{fontSize:"20px"}}>{size}</sup></Link></div>
        </article>
        <br/>
        <article className="Artbtn">
          <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
          <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
          <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
          <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
          <button id="dropbtn" onClick={toggleDropdown}>Sort By▾</button>
        </article>
        </nav>
        {isOpen && (
              <div className="dropdown-content">
                <a href="#" onClick={sortByPriceLtoH} >Price low to high</a>
                <a href="#" onClick={sortByPriceHtoL}>Price high to low</a>
                <a href="#" onClick={sortProductsAtoZ}>Name a-z</a>
              </div>
            )}
    </div>
  )
}

export default Navbar