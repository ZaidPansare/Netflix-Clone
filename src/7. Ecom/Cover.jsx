import './Cover.css'
import { Link } from 'react-router-dom'
import lee from './Images/lee.avif'
import ear from './Images/headphone.webp'
import bag from './Images/49916140126238.webp'
import img1 from './Images/pexels-tony-schnagl-5588224.jpg'
import img2 from './Images/pexels-marlene-leppänen-1183266.jpg'
import img4 from './Images/pexels-chloe-1043474.jpg'
import img5 from './Images/pexels-jermaine-ulinwa-3193731.jpg'
import img6 from './Images/pexels-hamann-la-1192609.jpg'
import img7 from './Images/pexels-andrea-piacquadio-837140.jpg'
import img8 from './Images/pexels-spencer-selover-428340.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp,faInstagram,faLinkedinIn,faXTwitter} from '@fortawesome/free-brands-svg-icons'


const Cover = () => {
    
  return (
    <div className='main'>
        <header id='head-cov'>
        <div className='cover-nav'>
        <Link to={"/"} style={{color:'white', textDecoration:'none'}}><h3>Home</h3></Link>
            <Link to={"/home"} style={{color:'white', textDecoration:'none'}}><h3>Products</h3></Link>
            <Link to={"/cart"} style={{color:'white', textDecoration:'none'}}><h3>Cart</h3></Link>    
    
        </div>
        </header>
        <div className="text2">
            <h1>Shop Brands</h1>
        </div>
        <div className="phone">
        <img src={lee} alt="" />
        </div>
        <h1>Shop Electronics</h1>
        <div className="ear">
            <img src={ear} alt="" />
        </div>
        <h1>Shop Accessories</h1>
        <div className="ear">
            <img src={bag} alt="" />
        </div>
        
        <div className="text1">
            <h1>Shop By Style</h1>
        </div>
        <div className='caro' style={{display:"inline-flex",gap:"20px", overflowX:"scroll"}}>
            <img src={img8} id='a' alt="" />
            <img src={img1} alt="" />
            <img src={img5} alt="" />
            <img src={img7} id='b' alt="" />
            <img src={img4} alt="" />
            <img src={img6} alt="" />
            <img src={img2} alt="" />
        </div>
        <footer className="cover-foot">
            <div className="left">
                <a href="#"><FontAwesomeIcon icon={faPhone} />Call</a>
                <a href="#"><FontAwesomeIcon icon={faEnvelope} />Mail</a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</a>
            </div>
            <div className="middle">
                <p>"Welcome to our vibrant online marketplace, where shopping meets convenience and quality! Discover a world of handpicked treasures, from trendy fashion essentials to cutting-edge electronics. Explore a curated collection of top-tier products, meticulously selected to cater to your every need. Experience seamless shopping with user-friendly navigation, secure transactions, and prompt delivery. Join us and embark on a shopping journey that combines the best of innovation, style, and unparalleled customer service. Start exploring your desires today, right at your fingertips."</p>
            </div>
            <div className="right">
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
        </footer>
    </div>
  )
}

export default Cover