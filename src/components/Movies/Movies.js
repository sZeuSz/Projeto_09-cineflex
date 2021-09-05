import './Movies.css'
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Movies () {

    const [movies, setMovies] = useState(null);
    
    useEffect (() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");

        promise.then((response) =>  {
            console.log(response.data);
            setMovies([...response.data]);
        })
    }, []);

    if(movies === null){
        return (
            <h2> LOADING </h2>
        )
    }

    return (
        <div className="movies">
            {movies.map((movie) => (
                <Link to={`/filme/${movie.id}`}>
                    <div className="movie" key={movie.id}>
                        <img src={movie.posterURL} alt="movie" />
                    </div>
                </Link>
            ))}
        </div>
    );
}