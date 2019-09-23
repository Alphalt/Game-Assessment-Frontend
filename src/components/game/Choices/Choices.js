import React from 'react';
import rockImage from '../../../images/3-RockHand.png';
import paperImage from '../../../images/3-PaperHand.png';
import scissorsImage from '../../../images/3-ScissorsHand.png';
import './Choices.css';

const Choices = props => {

    const setChoice = choice => {
        props.setRoundChoice(choice);
    }

    return (
        <div className="container">
            <div onClick={setChoice.bind(this, 0)} className="rock">
                <table className="card">
                    <tbody>
                        <tr>
                            <td align="right"><img className="RockImage" src={rockImage} alt="rockImage" /></td>
                            <td align="left"><h1>ROCK</h1></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div onClick={setChoice.bind(this, 1)} className="paper">
                <table className="card">
                    <tbody>
                        <tr>
                            <td align="right"><img className="PaperImage" src={paperImage} alt="paperImage" /></td>
                            <td align="left"><h1>PAPER</h1></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div onClick={setChoice.bind(this, 2)} className="scissors">
                <table className="card">
                    <tbody>
                        <tr>
                            <td align="right"><img className="ScissorsImage" src={scissorsImage} alt="scissorsImage" /></td>
                            <td align="left"><h1>SCISSORS</h1></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Choices;