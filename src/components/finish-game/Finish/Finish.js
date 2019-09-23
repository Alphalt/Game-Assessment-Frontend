import React from 'react';
import { Link } from 'react-router-dom';

const Finish = () => {


    return (
        <div className="Finish">
            <h2>We Have a Winner!</h2>
            {
                (() => {
                    if(parseInt(localStorage.getItem('gamesWinsOne') > parseInt(localStorage.getItem('gamesWinsTwo')))) {
                        return <h4>{localStorage.getItem('PlayerOneName')}</h4>
                    }

                    if(parseInt(localStorage.getItem('gamesWinsOne') < parseInt(localStorage.getItem('gamesWinsTwo')))) {
                        return <h4>{localStorage.getItem('PlayerTwoName')}</h4>
                    }

                    return <Link to="/Stadistics" className="Button">Let's See The Results!</Link>
                })()
            }
        </div>
    )
}

export default Finish;