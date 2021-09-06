import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './Sucess.css'
export default function Sucess ({nome, cpf, movie, selectedSeats, movieDayInfo}) {
    
    const [sucess, setSucess] = useState("d");
    /*useEffect( () => {

    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many`, {"ids":selectedSeats.map((seat) => seat.id), "name":nome, "cpf":cpf});

        promise.then((response) => {
            setSucess(response.data);
        })
        promise.catch((error) => {
            alert("Erro no servidor, sorry");
            setSucess("bad");
        })
    }, [])*/

    console.log(selectedSeats)
    
    if(sucess === ""){

        return (
            <Loading />
        )
    }
    return (
        sucess === "" ? "" : <div className="container-sucess">
            <div className="info-sucess centralize-items-h" color="#247A6B" weigth="700">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </div>
            
            <div className="info-movie-buyer">
                <h6>Filme e sessão</h6>
                <p>{movie.title}</p>
                <p>{movieDayInfo.date} {movieDayInfo.hour}</p>
            </div>
        
            <div className="info-movie-buyer">
                <h6>Ingressos</h6>
                {selectedSeats.sort((a, b) => a.id - b.id).map((seat, index) => <p key={index} >Assento {seat.name}</p>)}
            </div>

            <div className="info-movie-buyer">
                <h6>Comprador</h6>
                <p>Nome: {nome} </p>
                <p>CPF: {formatCpf(cpf)}</p>
            </div>
            <Link className="link" to="/">
                <div className="centralize-items-h back-home-button">
                    <button className="reserve-seat">Voltar pra Home</button>
                </div>
            </Link>
        </div>
    )
}

function formatCpf (cpf) {

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}
