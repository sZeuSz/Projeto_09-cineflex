import './Sucess.css'
export default function Sucess () {
    
    return (
        <div className="container-sucess">
            <div className="info-sucess centralize-items-h" color="#247A6B" weigth="700">
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </div>
            
            <div className="info-movie-buyer">
                <h6>Filme e sessão</h6>
                <p>nome filme</p>
                <p> data   hora</p>
            </div>
        
            <div className="info-movie-buyer">
                <h6>Ingressos</h6>
                <p>assento 12</p>
            </div>

            <div className="info-movie-buyer">
                <h6>Comprador</h6>
                <p>Nome: junin </p>
                <p>CPF: chunoo}</p>
            </div>

            <div className="centralize-items-h">
                <button className="reserve-seat">Voltar pra Home</button>
            </div>
        </div>
    )
}