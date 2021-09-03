import logo from './logo.svg';
import './App.css';
import { BrowserRoute, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRoute>
        <Switch>
          <Route path='/home'>
            <Header />
          </Route>
        </Switch>
    </BrowserRoute>
  );
}

export default App;
