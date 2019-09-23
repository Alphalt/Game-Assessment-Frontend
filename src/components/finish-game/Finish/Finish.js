import React, { useState, useEffect } from 'react';
import './Finish.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Finish = () => {

    const [data, setData] = useState({});

    const finishGameCallApi = async (request) => {
        await axios.put('https://game-assessment-backend.herokuapp.com/api/game/finish', request)
            .then(result => {
                setData(result.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const request = {
            gameId: localStorage.getItem('GameId')
        }
        finishGameCallApi(request);
    })

    return (
        <div className="finish">
            <div className="title">
                <h2>GAME OF DRONES</h2>
            </div>

            <h2>We Have a Winner!</h2>

            <h4>{data.winner.name}</h4>

                <table>
                    <thead>
                        <tr>
                            <th>Round</th>
                            <th>Player</th>
                        </tr>

                    </thead>
                    <tbody>
                        {data.rounds.map((round, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{data.players[parseInt(round.winner), 10].name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            <Link to="/start-game" className="blueButton">Play Again</Link>
        </div>
    )
}

export default Finish;