import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'
import { useNavigate} from 'react-router-dom'

const Row = ({title,fetchUrl,isLargeRow}) => {

    const navigate = useNavigate()
    const [movie,setMovie] = useState([])

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        async function fetch(){
            const request = await axios.get(fetchUrl)
            setMovie(request.data.results)
            return request
        }
        fetch()
    })

  return (

    <div className='Row'>
        <h1>{title}</h1>
     <div className='row__posters'>
     {movie.map((movie)=>{
        return(
            <>
            <img className={`row__poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} 
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt=""
            onClick={()=>{navigate('/movie',{state:{movie}})}} />
            </>
        )
     })}
     </div>
    </div>
  )
}

export default Row