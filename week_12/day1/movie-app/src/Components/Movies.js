import React, { useState, useEffect } from "react";
import MoviesCard from './MoviesCard'

export default function Movies() {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, );

    const getMovies = async () => {
        const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=61b3a4fd", {
            headers: { Accept: "application/json" },
          });
        
        const parsedData = await response.json();
        setMovies([...Movies, parsedData.Movies]);
        Movies.push(parsedData.Movies);
      };
      
    return (
        <div>
            <MoviesCard/>

            <form>
            <button type="submit">Search Movie</button>
            <input type="text" name="name" />
            </form>
            
        </div>
    );
}




