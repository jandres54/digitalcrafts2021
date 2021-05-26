import React, { useState } from "react";
import MoviesCard from './MoviesCard';
import "../App.css";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("")
    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=61b3a4fd&s=${searchText}`, {
            headers: { Accept: "application/json" },
          });
        
        const parsedData = await response.json();
        console.log(parsedData)
        setMovies(parsedData.Search);
        
      };
    console.log(movies)
    return (
        <div>
            <div className="movies-card">
                {movies.map((movieFromCache) => (
                    
                    <MoviesCard  movieFromCache={movieFromCache} setMovies={setMovies}/>
                  ))}
            </div>
            
            <div className="searchBox">
                <button onClick={getMovies}>Search Movie</button>
            <input type="text" name="name" onChange={event =>setSearchText(event.target.value)} />
            
            </div>
        </div>
    );
}




