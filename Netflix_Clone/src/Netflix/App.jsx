import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Row from './Projects/8. Netflix clone/Row'
import requests from './Projects/8. Netflix clone/request'
import Header from './Projects/8. Netflix clone/Header';
import Movie from './Projects/8. Netflix clone/movie';
import Cast from './Projects/8. Netflix clone/Cast';


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'element={
                <>
                    <Header/>
                    <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
                    <Row title="Trending" fetchUrl={requests.fetchTrending} />
                    <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                    <Row title="UpComing" fetchUrl={requests.fetchUpComing} />
                    <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
                    <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
                    <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
                    <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
                    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
                </>
            }>                
            </Route>
            <Route path='/movie' element={<Movie/>}/>
            <Route path='/cast' element={<Cast/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App