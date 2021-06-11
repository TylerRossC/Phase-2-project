import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import GameCardContainer from './Components/GameCardContainer'
import Homepage from './Components/Homepage'
import Wishlist from './Components/Wishlist'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  
 
  
  
  
  
  return (
    <div className='App'>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Homepage">GameOn!</Navbar.Brand>
        <Nav className="navbar-links">
          <Nav.Link href="/Homepage">Home</Nav.Link>
          <Nav.Link href="/GameCardContainer">Games</Nav.Link>
          <Nav.Link href="/Wishlist">Wishlist</Nav.Link>
        </Nav>
      </Navbar>
    <Switch>
      <Route path = '/GameCardContainer' component = {GameCardContainer}>
        {/* <GameCardContainer /> */}
      </Route>
      <Route path = '/Homepage' component = {Homepage}>
        {/* <Homepage /> */}
      </Route>
      <Route path = '/Wishlist' component = {Wishlist}>
        {/* <Wishlist /> */}
      </Route>
    </Switch>
    {/* <GameCardContainer /> */}

      
    
    </div>
  );
}

export default App;
