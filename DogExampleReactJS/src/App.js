import React from 'react';
import './App.css';
import Container from './Container/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dogs">DogList</Link>
            </li>
          </ul>
        </nav>
     
        <Switch>
          <Route path="/dogs">
            <Container></Container>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
