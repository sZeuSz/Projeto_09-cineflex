import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Movie.css";

export default function Movie ({movie, setMovie}) {
    
    const {idFilme} = useParams();
    console.log(idFilme);
    useEffect(() => {

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilme}/showtimes`);

        promise.then( (response) => {
            console.log(response.data);
            setMovie(response.data);
        })
    }, [])

    return (
        <main className="container ">
            <h2 className="centralize-items-h">Selecione o horário</h2>
            <section className="section">
                {movie === null ? "" : movie.days.map((day, index) => {

                    return (
                        <div key={index}>
                            <h3 className="day-date-and-time">
                                {day.weekday} - {day.date}
                            </h3>
                            <div className="schedules">
                                <Showtime showtimes={day.showtimes}/>
                            </div>
                        </div>
                    )
                })}
            </section>
            <footer>
                <figure className="image">
                    <div className="background-img centralize-items-h">
                        <img src={movie === null ? "" : movie.posterURL} alt="movie-schedules" />
                    </div>
                    <figcaption>{movie === null ? "" : movie.title}</figcaption>
                </figure>
            </footer>
        </main>
    )
}

function Showtime ({showtimes}) {

    console.log(showtimes);
    return (
        <>
          {showtimes.map((showtime) => {
             return (
                <Link to={`/sessao/${showtime.id}`}>
                    <button className="time" id={showtime.id}>{showtime.name}</button>
                </Link>
             )
          })}
        </>
    )
}