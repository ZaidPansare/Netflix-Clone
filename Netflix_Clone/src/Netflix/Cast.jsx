import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Cast.css'


const Cast = () => {
    const location = useLocation()
    const specificCast = location.state.cast
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    const [castm,setCastM] = useState([])

    useEffect(()=>{
        fetch(`http://api.themoviedb.org/3/search/person?api_key=5a33d879bcdd3e3ee447d7fe080c44dd&query=${specificCast.name}`)
        .then(res=>res.json())
        .then(d=>setCastM(d.results))
    },[])


  return (
    <aside>
        <div className='Cast'>
            <img src={`${baseUrl}${specificCast.profile_path}`} id='casting' alt="" />
            <h1>{specificCast.name}</h1>
            <p>{specificCast.character}</p>
            <p>{specificCast.known_for_department}</p>
        </div>
        <div style={{display:"flex", justifyContent:'space-around'}}>
            {castm.map((movie)=>{
                return(
                    <main key={movie.id}>
                        <img src={`${baseUrl}${movie.known_for[0].poster_path}`} height={'300px'} width={'300px'} alt="" />
                        {/* <p style={{color:"white"}}>{movie.known_for[0].overview}</p> */}
                    </main>
                )
            })}
        </div>
    </aside>

  )
}

export default Cast