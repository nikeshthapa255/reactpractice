import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar color="danger">
        <div className="container">
          <Navbar href="#">NTC</Navbar>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
