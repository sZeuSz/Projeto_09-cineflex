import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Session from '../Session/Session';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path="/filme/:idFilme" exact> 
             <Movie /> 
          </Route>
          <Route path="/sessao/:idSessao" exact> 
             <Session /> 
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
