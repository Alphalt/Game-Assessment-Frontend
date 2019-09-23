import React, { useState } from 'react';
import './PlayersForm.css';

const PlayersForm = props => {

    const initialFormState = { playerOne: {}, playerTwo: {}, numberOfRounds: null }
    const [formValues, setFormValues] = useState(initialFormState)

    const handleInputChangePlayerOne = event => {
        const { value } = event.target;

        let savePlayer = { name: '', number: null };
        savePlayer.name = value;
        savePlayer.number = 1;

        setFormValues({ ...formValues, playerOne: savePlayer });
    }

    const handleInputChangePlayerTwo = event => {
        const { value } = event.target;

        let savePlayer = { name: '', number: null };
        savePlayer.name = value;
        savePlayer.number = 2;

        setFormValues({ ...formValues, playerTwo: savePlayer });
    }

    const handleInputChangeRounds = event => {
        const { value } = event.target;
        setFormValues({ ...formValues, numberOfRounds: parseInt(value) });
    }


    return (
        <div className="playersNamesform">
            <form
                onSubmit={event => {
                    event.preventDefault()
                    if (!formValues.playerOne || !formValues.playerTwo || !formValues.numberOfRounds) return

                    props.startGame(formValues)
                    setFormValues(initialFormState)
                }}
            >
                <input type="text" name="playerOne" placeholder="Player 1 Name" onChange={handleInputChangePlayerOne} />
                <input type="text" name="playerTwo" placeholder="Player 2 Name" onChange={handleInputChangePlayerTwo} />
                <br/>
                <label>Select number of Rounds</label><br/>
                    <select id="blue" name="select" onChange={handleInputChangeRounds}>
                        <option value="">Number of Rounds...</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                <br/>
                <button className="blueButton" type="submit">Start</button>
            </form>
        </div>
    )
}

export default PlayersForm;