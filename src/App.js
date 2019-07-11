import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import  Menu  from './components/MenuComponent'

function App() {
  return (
    <div >
      <Navbar color="primary">
        <div className="container">
          <Navbar href="#">NTC</Navbar>
        </div>
      </Navbar>
      <Menu ></Menu>
    </div>
  );
}

export default App;
