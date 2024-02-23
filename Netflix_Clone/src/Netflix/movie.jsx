import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import YouTube from 'react-youtube';
import { useNavigate} from 'react-router-dom'


const movie = () => {
    const location = useLocation()
    const specificMovie = location.state.movie
    const baseUrl = "https://image.tmdb.org/t/p/original/"
    const navigate = useNavigate()
    const [trailer, setTrailer] =useState([])
    const [cast,setCast]= useState([])

    function fetchTrailer(id){
        fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=5a33d879bcdd3e3ee447d7fe080c44dd`)
        .then(res=>res.json())
        .then(d=>setTrailer(d.results[0].key))
    }
    function fetchCast(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5a33d879bcdd3e3ee447d7fe080c44dd&language=en-US`)
        .then(res=>res.json())
        .then(d=>setCast(d.cast))

    }
    const opts = {
        height: '400',
        width: '100%',
      };

  return (
    <div>
    <div className="banner" style={{
        backgroundSize:"cover",
        backgroundImage:`url("${baseUrl}/${specificMovie?.backdrop_path}")`,
        backgroundPosition:"center-center",
    }}>
        <div className="banner__contents">
            <h1 className='banner__title'>{specificMovie.original_title || specificMovie.original_name || specificMovie.name}</h1>
        </div>
        <div className="banner__buttons">
            <button className="banner__button" onClick={fetchTrailer(specificMovie.id)}>Play</button>
            <button className="banner__button" onClick={fetchCast(specificMovie.id)}>Cast</button>
        </div>
        <h1 className='banner__description'>{specificMovie.overview}</h1>
    </div>
        <div>
            <h1 style={{color:"white"}}>Cast</h1>
            {cast.slice(0,10).map((cast)=>{
                return(
                    <img 
                    key={cast.id} height={'100px'} width={'100px'} style={{borderRadius:"50%",margin:"10px"}}
                    src={`${baseUrl}${cast.profile_path}`} alt=""
                    onClick={()=>{navigate('/cast',{state:{cast}})}} />
                )
            })}
        </div>
        <div>
            {trailer && <YouTube videoId={trailer} opts={opts}/>}
        </div>
    </div>
  )
}

export default movie