import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './components/Header';
import {Watchlist} from './pages/Watchlist';
import {Watched} from './pages/Watched';
import {Home} from './pages/Home';
import './App.css';
import {GlobalProvider} from './context/GlobalState';

function App() {

return (
    <GlobalProvider>
        <Router>
            <Header/>

            <Switch>

                <Route exact path="/" component={Home}/>
                <Route exact path="/watchlist" component={Watchlist}/>
                <Route exact path="/watched" component={Watched}/>

            </Switch>

        </Router>
    </GlobalProvider>
);
}

export default App;
