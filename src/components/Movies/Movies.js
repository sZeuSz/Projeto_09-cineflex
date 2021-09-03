import './Movies.css'
import { React, useEffect, useState } from 'react'
import axios from 'axios'

export default function Movies () {

    const [movies, setMovies] = useState([]);
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies");

    useEffect (() => {
        promise.then((response) =>  {
            console.log(response.data);
            setMovies([...response.data]);
        })
    }, []);

    return (
        <div className="movies">
            {movies.map((movie) => <Movie movie={movie}/>)}
        </div>
    );
}

function Movie ({movie}) {

    return (
        <div class="movie">
            <img src="https://s3-alpha-sig.figma.com/img/00b4/737f/db39d65a7e5e7912d02062f7a1269acc?Expires=1631491200&Signature=hxoOVBY6raS8z9XpEx54jJcTV4HavmRi9a2hYLGg8rvXVmRBg5FazjiOrtWcJf3VIHhib2hoeG-9KXM4ES0IjmQNbfnlMjg2OtCAzAxsvttAxiMCjz1aTt9i8IQ7I5JKLbSblzvknt8xk2y7eoy-kve0V9whVBeWHDwugndMK~iWKtckzdCmEqr5romP9ytIbPhIWJkHcEb2utYj7uSQ544tT1BmRLxhDhbQR8jcIkUu6kTm8vv5iusz7siz90e-xfLHzsETpFFNUcAvnqKVVcueiIj9r90uEUO8aeQ4TCYrgYK1SJE5NwCr-3~pByIIuOT0H5TlKkq~5HDxO3U3Dw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="image-movie"/>
        </div>
    );
}