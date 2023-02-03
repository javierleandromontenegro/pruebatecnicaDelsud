import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
        <BrowserRouter> 
       <div className="App">
        <Switch>
            <Route  path="/" component={NavBar} />
        {/* <Route exact path="/home" component={ Home } />
        <Route exact strict path="*" component={ Error1 } /> */}
        </Switch>
          
    </div>
        </BrowserRouter>
  );
}

export default App;

