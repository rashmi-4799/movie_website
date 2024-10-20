import React, { useEffect,useState } from "react";
import './App.css';
import MovieCard from './MovieCard.jsx'
// 8335f3df
const API_URL='http://www.omdbapi.com?apikey=8335f3df';
const App=()=>
{
    const [movies,setMovies]=useState([])
    const [searchTerm,setSearchTerm]=useState('')
    const searchMovies= async(title)=>
      {
        console.log("title", title);
        
         const response= await fetch(`${API_URL}&s=${title}`);
         console.log("Hii", response);
         
         const data= await response.json();
         setMovies(data.Search)
      }
   useEffect(()=>
   {
      searchMovies('')
   },[])
   return (
    <>
      <div className="app">
      <h1>MoviesApp</h1>
       <div className="search">
         <input placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
         />
         <img 
         src={''}
         alt=""
         onClick={()=>{searchMovies(searchTerm)}}
         />
       </div>
        {
            movies?.length > 0 ?
            (
                <div className="container">
                {
                    movies.map((movie)=>
                    (
                        <MovieCard movie={movie} />
                    ))
                }
                </div>
            ):
            (
                <div className="empty">
                <h2>No Movies Found</h2>
                </div>
            )
        }
      </div>
    </>
   )
}
export default App;
