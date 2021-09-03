import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
