import React from 'react';
import { Link } from 'react-router-dom';
import principalImage from './images/1-GameOfDrones.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Title-Container">
        <h2 className="Title">GAME OF DRONES</h2>
        <div className="Button-Container">
          <Link to="/start-game" className="Button">Let's Play!</Link>
        </div>
      </div>
      <div className="Container">
        <img className="Principal-Image" src={principalImage} alt="principalImage" />
      </div>
    </div>
  );
}

export default App;
