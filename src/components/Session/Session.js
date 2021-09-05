import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./Session.css"


export default function Session () {

    const [seats, setSeats] = useState(null);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [selectedSeats, setSelectedSeats] = useState([]);
    const {idSessao} = useParams();

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
                {seats === null ? "" : seats.seats.map((seat, index) => {return <Button key={index} seat={seat} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} />})}
            </section>
            <div className="states">
                <div className="info-states">
                    <button className="seat selected"></button>
                    <span>Selecionado</span>
                </div>
                <div className="info-states">
                    <button className="seat"></button>
                    <span>Disponivel</span>
                </div>
                <div className="info-states">
                    <button className="seat unavailable" ></button>
                    <span>Indisponível</span>
                </div>
            </div>
            <div className="forms">
                <h2 className="centralize-items-h">Nome do comprador:</h2>
                <input placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)}></input>
                <h2 className="centralize-items-h">CPF do comprador:</h2>
                <input placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)}></input>

                <button onClick={() => imprime(selectedSeats)}>clica ni mim</button>
            </div>
            {nome}  
            {cpf}
            <footer>
                <figure className="image">
                    <div className="background-img centralize-items-h">
                        <img src={seats === null ? "" : seats.movie.posterURL} alt="movie-schedules" />
                    </div>
                    <div className="column-style">
                        <figcaption>{seats=== null ? "" : seats.movie.title}</figcaption>
                        <figcaption>{seats=== null ? "" : (`${seats.day.weekday} - ${seats.day.date}`)}</figcaption>
                    </div>

                </figure>
            </footer> 
        </main>
    )
}
function imprime (selectedSeats){
    console.log(selectedSeats)
}

function Button ({seat, selectedSeats, setSelectedSeats}) {

    const [selected, setSelected] = useState("");

    function select(isAvailable, id) {
        
        if(!isAvailable){
            alert("Esse assento não está disponível");
        }
        else if (selected === "") {
          console.log("auqi")
          setSelectedSeats([...selectedSeats, id]);
          setSelected("selected");
        }
        else {
          setSelected("");
          setSelectedSeats(selectedSeats.filter((seatId) => seatId !== id))
        }
    }

    return (
        <button className={`seat ${seat.isAvailable === false ? "unavailable" : selected}`} onClick={() => select(seat.isAvailable,seat.id)}>{seat.name}</button>
    )
}