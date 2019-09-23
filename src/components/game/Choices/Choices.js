import React, { useState } from 'react';
import rockImage from '../../../images/3-RockHand.png';
import paperImage from '../../../images/3-PaperHand.png';
import scissorsImage from '../../../images/3-ScissorsHand.png';

const Choices = props => {

    const setChoice = choice => {
        props.setRoundChoice(choice);
    }

    return (
        <div className="Choices">
            <div onClick={setChoice.bind(this, 0)} className="Rock">
                <img className="RockImage" src={rockImage} alt="rockImage" />
                <p>ROCK</p>
            </div>
            <div onClick={setChoice.bind(this, 1)} className="Paper">
                <img className="PaperImage" src={paperImage} alt="paperImage" />
                <p>PAPER</p>
            </div>
            <div onClick={setChoice.bind(this, 2)} className="Scissors">
                <img className="ScissorsImage" src={scissorsImage} alt="scissorsImage" />
                <p>SCISSORS</p>
            </div>
        </div>
    )
}

export default Choices;