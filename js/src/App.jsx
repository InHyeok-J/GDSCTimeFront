import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from './module/user';
import Logo from './assets/logo/logo.png';
import Main from './pages/Main';
import Board from './pages/Board';
import Alarm from './pages/Alarm';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import MyPage from './pages/Mypage/Main';
import AuthPage from './pages/Mypage/Auth';
import EditPage from './pages/Mypage/Edit';
import Setting from './pages/Setting';
import BoardList from './pages/Board/BoardList';
import BoardDetail from './pages/Board/BoardDetail';
import SerachPage from './pages/Search';
import PostPage from './pages/Board/Post';

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
                <Route exact path="/board/list" component={BoardList} />
                <Route exact path="/board/detail/:id" component={BoardDetail} />
                <Route exact path="/board/post" component={PostPage} />
                <Route exact path="/alarm" component={Alarm} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/mypage" component={MyPage} />
                <Route exact path="/mypage/auth" component={AuthPage} />
                <Route exact path="/mypage/edit" component={EditPage} />
                <Route exact path="/setting" component={Setting} />
                <Route exact path="/search" component={SerachPage} />
            </Switch>
        </HelmetProvider>
    );
};

export default App;
