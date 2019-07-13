import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <Main />
      </React.Fragment>
    </BrowserRouter>
  );

}



export default App;
