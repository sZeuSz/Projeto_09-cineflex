import './Movies.css'
import { React, useEffect, useState } from 'react'
import { Link, useHistory} from 'react-router-dom';
import axios from 'axios'
import Loading from '../Loading/Loading';

export default function Movies () {

    const [movies, setMovies] = useState(null);
    
    useEffect (() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");

        promise.then((response) =>  {
            setMovies([...response.data]);
        })
    }, []);

    if(movies === null){
        return (
            <Loading />
        )
    }

    return (
        <div className="movies">
            {movies.map((movie, index) => (
                <Link key={index} to={`/filme/${movie.id}`}>
                    <div className="movie" key={index}>
                        <img src={movie.posterURL} alt="movie" />
                    </div>
                </Link>
            ))}
        </div>
    );
}