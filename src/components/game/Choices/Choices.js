import React, { useState } from 'react';
import rockImage from '../../../images/3-RockHand.png';
import paperImage from '../../../images/3-PaperHand.png';
import scissorsImage from '../../../images/3-ScissorsHand.png';

const Choices = () => {


    return (
        <div className="Choices">
            <div className="Rock">
                <img className="RockImage" src={rockImage} alt="rockImage" />
            </div>
            <div className="Paper">
                <img className="PaperImage" src={paperImage} alt="paperImage" />
            </div>
            <div className="Scissors">
                <img className="ScissorsImage" src={scissorsImage} alt="scissorsImage" />
            </div>
        </div>
    )
}

export default Choices;