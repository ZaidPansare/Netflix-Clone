import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './7. Ecom/Home'
import Cart from './7. Ecom/Cart'
import About from './7. Ecom/About'
import Data from './7. Ecom/Data'
import Cover from './7. Ecom/Cover'
import { useState } from 'react'


const App = () => {
  const [data,setData]= useState(Data)
  const [search,setSearch] = useState("")
  const [cart, setCart] = useState([])
  const [filteredData, setFilteredData] = useState(data)


  function handleClick(clickedItem){
    const itemExists = cart.find((item)=>item.id===clickedItem.id);

    if (!itemExists){
      setCart([...cart, {...clickedItem,amount:1}]);
    }
      else{
        const updatedCart = cart.map((item)=>
        item.id===clickedItem.id ? {...item, amount:item.amount+1} : item
        );
        setCart(updatedCart)
      }
  };

  return (  
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Cover/>}></Route>
            <Route path='/home' element={<Home data={data} search={search} setSearch={setSearch} handleClick={handleClick} cart={cart} setData={setData}
            setFilteredData={setFilteredData} filteredData={filteredData}/>} ></Route>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
            <Route path='/about/:Id' element={<About Data={Data} handleClick={handleClick}/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App