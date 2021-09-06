import './Home.css'
import Movies from '../Movies/Movies';
import {React} from 'react';


export default function Home ({setNome, setCpf, setSelectedSeats, setMovieDayInfo}) {

    setNome("");
    setCpf("");
    setSelectedSeats("");
    setMovieDayInfo("");
    return (
        <main className="container centralize-items-h">
            <h2>Selecione o filme</h2>
            <Movies />
        </main>
    );
}