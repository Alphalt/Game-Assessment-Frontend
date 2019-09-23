import React, { useState } from 'react';

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
        <div className="Players-Form">
            <form
                onSubmit={event => {
                    event.preventDefault()
                    if (!formValues.playerOne || !formValues.playerTwo || !formValues.numberOfRounds) return

                    props.startGame(formValues)
                    setFormValues(initialFormState)
                }}
            >
                <input name="playerOne" placeholder="Player 1 Name" onChange={handleInputChangePlayerOne} />
                <input name="playerTwo" placeholder="Player 2 Name" onChange={handleInputChangePlayerTwo} />
                <label>Number of Rounds</label>
                <select name="select" onChange={handleInputChangeRounds}>
                    <option value="">Select</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">Start</button>
            </form>
        </div>
    )
}

export default PlayersForm;