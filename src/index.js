import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Start from '../src/components/start-game/Start/Start';
import Board from '../src/components/game/Board/Board';
import Finish from '../src/components/finish-game/Finish/Finish';
import Stadistics from '../src/components/finish-game/Stadistics/Stadistics';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/start-game" component={Start} />
            <Route path="/board" component={Board} />
            <Route path="/finish-game" component={Finish} />
            <Route path="/stadistics" component={Stadistics} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
