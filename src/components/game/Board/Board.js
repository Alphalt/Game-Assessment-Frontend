import React, { useState, useEffect } from 'react';
import './Board.css';
import Choices from '../Choices/Choices';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Board = () => {

    const initialRequest = { round: {}, gameId: null };

    const [rounds, setRounds] = useState(0);
    const [playerName, setPlayerName] = useState('');
    const [playerIdentifier, setPlayerIdentifier] = useState(1);
    const [request, setRequest] = useState(initialRequest);
    const [roundCounter, setRoundCounter] = useState(1);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRequest({ ...request, gameId: localStorage.getItem('GameId') });
            setPlayerName(localStorage.getItem('PlayerOneName'));
            setRounds(parseInt(localStorage.getItem('NumberOfRounds')));
            localStorage.setItem('gamesWinsOne', 0)
            localStorage.setItem('gamesWinsTwo', 0)
        }, 2000)
    }, [])

    const moveGameCallApi = (request) => {
        return axios.post('https://game-assessment-backend.herokuapp.com/api/round/move', request)
            .then(result => {
                let gamesOne = localStorage.getItem('gamesWinsOne');
                let gamesTwo = localStorage.getItem('gamesWinsTwo');
                if (parseInt(result.data.winner) === 1) localStorage.setItem('gamesWinsOne', parseInt(gamesOne) + 1);
                if (parseInt(result.data.winner) === 2) localStorage.setItem('gamesWinsTwo', parseInt(gamesTwo) + 1);
            })
            .catch(error => console.log(error));
    }

    const setRoundChoice = selectedChoice => {
        if (!finish) {
            if (playerIdentifier === 1) {
                localStorage.setItem('optionPlayerOne', selectedChoice)
                setPlayerIdentifier(2);
                setPlayerName(localStorage.getItem('PlayerTwoName'));
            } else {
                localStorage.setItem('optionPlayerTwo', selectedChoice)
                setPlayerIdentifier(1);
                setPlayerName(localStorage.getItem('PlayerOneName'));
                validateFinishRound();
            }
        }
    }

    const validateFinishRound = () => {
        if (localStorage.getItem('optionPlayerOne') && localStorage.getItem('optionPlayerTwo')) getMoveResult();
    }

    const getMoveResult = () => {
        let currentRound = {
            optionPlayerOne: parseInt(localStorage.getItem('optionPlayerOne')),
            optionPlayerTwo: parseInt(localStorage.getItem('optionPlayerTwo'))
        }
        let requestMove = {
            round: currentRound,
            gameId: request.gameId
        }
        let currentCounter = roundCounter;
        moveGameCallApi(requestMove);
        localStorage.setItem('optionPlayerOne', null)
        localStorage.setItem('optionPlayerTwo', null)
        setPlayerName(localStorage.getItem('PlayerOneName'));
        if (roundCounter < rounds) setRoundCounter(currentCounter + 1);
        if (roundCounter === rounds) setFinish(true);
    }

    return (
        <div className="Board">
            {finish ? <Redirect to='/finish-game' /> : null}
            <div className="title">
                <h2>GAME OF DRONES</h2>
            </div>

            <div className="main">
                <div className="board">
                    <h4>Round {roundCounter}</h4>
                    <h4>{playerName}</h4>
                    {
                        (() => {
                            if (playerIdentifier === 1) {
                                let gamesWinsOne = localStorage.getItem('gamesWinsOne');
                                return <p>Won games {gamesWinsOne}</p>
                            }

                            if (playerIdentifier === 2) {
                                let gamesWinsTwo = localStorage.getItem('gamesWinsTwo');
                                return <p>Won games {gamesWinsTwo}</p>
                            }
                        })()
                    }
                </div>
                <div className="Choices-Container">
                    <Choices setRoundChoice={setRoundChoice} />
                </div>
            </div>
        </div>
    )
}

export default Board;