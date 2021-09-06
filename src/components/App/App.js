import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Sucess from '../Sucess/Sucess';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Session from '../Session/Session';
import { useState } from 'react';

function App() { 
  const [movie, setMovie] = useState(null);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path="/filme/:idFilme" exact> 
             <Movie movie={movie} setMovie={setMovie} /> 
          </Route>
          <Route path="/sessao/:idSessao" exact> 
             <Session nome={nome} setNome={setNome}/> 
          </Route>
          <Route path="/sucesso" exact> 
             <Sucess /> 
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
