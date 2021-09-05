import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./Session.css"


export default function Session () {

    const [seats, setSeats] = useState(null);
    const {idSessao} = useParams();
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [selected, setSelected] = useState("");

    useEffect ( () => {

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSessao}/seats`);

        promise.then((response) => {
            console.log(response.data)
            setSeats(response.data)
        })
    }, []) 

    return (
        <main className="container ">
            <h2 className="centralize-items-h">Selecione o(s) assento(s)</h2>
            <section className="seats">
                {seats === null ? "" : seats.seats.map((seat, index) => {return <Button key={index} seat={seat} />})}
            
            </section>
            <div className="states">
                <div className="info-states">
                    <button className="seat selecionado"></button>
                    <span>Selecionado</span>
                </div>
                <div className="info-states">
                    <button className="seat"></button>
                    <span>Disponivel</span>
                </div>
                <div className="info-states">
                    <button className="seat indisponivel" ></button>
                    <span>Indisponível</span>
                </div>
            </div>
            <div className="forms">
                <h2 className="centralize-items-h">Nome do comprador:</h2>
                <input placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)}></input>
                <h2 className="centralize-items-h">CPF do comprador:</h2>
                <input placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)}></input>
            </div>
            {nome}  
            {cpf}
            <footer>
                <figure className="image">
                    <img src={seats === null ? "" : seats.movie.posterURL} alt="movie-schedules" />
                    <figcaption>{seats=== null ? "" : seats.movie.title}</figcaption>
                </figure>
            </footer> 
        </main>
    )
}

function Button ({seat}) {

    const [selecionado, setSelecionado] = useState("");

    function selecionar() {
    
        if (selecionado === "") {
          setSelecionado("selecionado");
        } else {
          setSelecionado("");
        }
    }

    return (
        <button className={`seat ${seat.isAvailable === false ? "indisponivel" : selecionado}`} onClick={() => selecionar(seat.isAvailable)}>{seat.name}</button>
    )
}