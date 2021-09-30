import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logo from './assets/logo/logo.png';
import Main from './pages/Main';
import Board from './pages/Board';
import Alarm from './pages/Alarm';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
    return (
        <HelmetProvider>
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
                    <Route exac path="/signup" component={SignUp} />
                    <Route exac path="/login" component={Login} />
                </Switch>
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;
