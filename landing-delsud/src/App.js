import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage'

function App() {
  return (
        <BrowserRouter> 
       <div className="App">
        <NavBar/>
        <Switch>
            
            <Route   path="/" component={LandingPage} />

       
        </Switch>
          
    </div>
        </BrowserRouter>
  );
}

export default App;

