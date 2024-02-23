import React, { useState,useEffect } from 'react'
import axios from './axios.jsx'
import './Header.css'
import requests from './request'

const Header = () => {

    const [movie,setMovie] = useState([])

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetch(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            return request
        }
        fetch()
    },[])


  return (
        <div className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("${baseUrl}/${movie?.backdrop_path}")`,
            backgroundPosition:"center-center",
        }}>
            <div className="banner__contents">
                <h1 className='banner__title'>{movie.original_title || movie.original_name}</h1>
            </div>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">Cast</button>
            </div>
            <h1 className='banner__description'>{movie.overview}</h1>
        </div>
  )
}

export default Header