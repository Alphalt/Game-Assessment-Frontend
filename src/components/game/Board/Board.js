import React, { useState } from 'react';
import ballImage from '../../../images/3-Ball.png';
import loseBallImage from '../../../images/3-LoseBall.png';
import winBallImage from '../../../images/3-WinBall.png';

const Board = () => {


    return (
        <div className="Board">
            <div className="Start-Title-Container">
                <h2 className="Start-Title">GAME OF DRONES</h2>
            </div>

            <div className="row">
                <div className="column">
                    <div className="Game-Status">
                        <h4>Round </h4>
                        <h4>Player Name </h4>
                        <img className="Ball" src={ballImage} alt="ballImage" />
                        <img className="Ball" src={loseBallImage} alt="loseBallImage" />
                        <img className="Ball" src={winBallImage} alt="winBallImage" />
                    </div>
                    <div className="Choices-Container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board;