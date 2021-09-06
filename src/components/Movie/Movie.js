import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Movie.css";
import Loading from "../Loading/Loading";

export default function Movie ({movie, setMovie, setMovieDayInfo, movieDayInfo}) {
    
    const {idFilme} = useParams();
    
    useEffect(() => {

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilme}/showtimes`);

        promise.then( (response) => {
            setMovie(response.data);
        })
    }, [])

    if(movie === null){
        return (
            <Loading />
        )
    }

    return (
        <main className="container ">
            <h2 className="centralize-items-h">Selecione o horário</h2>
            <section className="section">
                {movie === null ? "" : movie.days.map((day, index) => {

                    return (
                        <div key={index}>
                            <h3 className="day-date-and-time" >
                                {day.weekday} - {day.date}
                            </h3>
                            <div className="schedules">
                                <Showtime weekday={day.weekday} date={day.date} showtimes={day.showtimes} setMovieDayInfo={setMovieDayInfo} movieDayInfo={movieDayInfo}/>
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

function Showtime ({showtimes, weekday, date, setMovieDayInfo, movieDayInfo}) {

    return (
        <>
          {showtimes.map((showtime, index) => {
             return (
                <Link key={index} to={`/sessao/${showtime.id}`} onClick={() => setMovieDayInfo({weekday, date, "hour": showtime.name})}>
                    <button className="time" id={showtime.id}>{showtime.name}</button>
                </Link>
             )
          })}
        </>
    )
}