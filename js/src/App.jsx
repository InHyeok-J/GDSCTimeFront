import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    useHistory,
    withRouter,
} from 'react-router-dom';
import Logo from './assets/logo/logo.png';
import Main from './pages/Main';
import Board from './pages/Board';
import Alarm from './pages/Alarm';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyPage from './pages/Mypage/Main';
import AuthPage from './pages/Mypage/Auth';
import EditPage from './pages/Mypage/Edit';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from './module/user';

const App = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { user } = useSelector((state) => state.user);

    useEffect(async () => {
        if (!user) {
            try {
                await dispatch(getUserAction());
            } catch {
                history.push('/login');
            }
        }
    }, [user]);

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
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/board" component={Board} />
                <Route exact path="/alarm" component={Alarm} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/mypage" component={MyPage} />
                <Route exact path="/mypage/auth" component={AuthPage} />
                <Route exact path="/mypage/edit" component={EditPage} />
            </Switch>
        </HelmetProvider>
    );
};

export default App;
