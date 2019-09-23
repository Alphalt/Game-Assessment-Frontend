import React from 'react';
import { Link } from 'react-router-dom';
import principalImage from './images/1-GameOfDrones.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="title">
          <h2>GAME OF DRONES</h2>
        </div>

        <div className="main">
          <img className="Principal-Image" src={principalImage} alt="principalImage" />
        </div>
        
        <Link to="/start-game" className="blueButton">Let's Play!</Link>
      </div>
    </div>
  );
}

export default App;
