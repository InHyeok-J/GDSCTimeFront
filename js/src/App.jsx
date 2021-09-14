import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logo from './assets/logo/logo.png';
import Main from './pages/Main';
import Board from './pages/Board';
import Alarm from './pages/Alarm';
import { Helmet } from 'react-helmet';

const App = () => {
    return (
        <>
            <Helmet
                title="GDSC TIME"
                link={[
                    {
                        rel: 'icon',
                        type: 'png',
                        href: Logo,
                    },
                ]}
            />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/board" component={Board} />
                    <Route exact path="/alarm" component={Alarm} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
