import React, { useState } from 'react';
import paperImage from '../../../images/2-Paper-looking.png';
import './Start.css';
import PlayersForm from '../PlayersForm/PlayersForm';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Start = () => {

    const initialRequest = { players: [], numberOfRounds: null }

    const [request, setRequest] = useState(initialRequest);
    const [toBoard, setToBoard] = useState(false);

    const startGameCallApi = (request) => {
        return axios.post('https://game-assessment-backend.herokuapp.com/api/game/start', request)
            .then(result => {
                localStorage.setItem('PlayerOneName', result.data.players[0].name)
                localStorage.setItem('PlayerTwoName', result.data.players[1].name)
                localStorage.setItem('NumberOfRounds', result.data.numberOfRounds)
                localStorage.setItem('GameId', result.data._id)
            })
            .catch(error => console.log(error));
    }

    const startGame = values => {
        let players = [];
        players.push(values.playerOne);
        players.push(values.playerTwo);

        let requestToSave = {
            players: players,
            numberOfRounds: values.numberOfRounds
        }

        setRequest({ ...request, requestToSave });
        setToBoard(true);

        startGameCallApi(requestToSave);
    }

    return (
        <div className="Start">
            {toBoard ? <Redirect to='/board' /> : null}
            <div className="Start-Title-Container">
                <h2 className="Start-Title">GAME OF DRONES</h2>
            </div>

            <div className="row">
                <div className="column">
                    <h2>Enter Players Names</h2>
                    <img className="PaperImage" src={paperImage} alt="papperImage" />
                </div>
                <div className="column">
                    <PlayersForm startGame={startGame} />
                </div>
            </div>
        </div>
    )
}

export default Start;