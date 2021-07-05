import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BuildDetailsContainer from './components/pages/buildDetails/buildDetailsContainer';
import buildHistoryContainer from './components/pages/buildHistory/buildHistoryContainer';
import s from './app.module.css';
import SettingPage from './components/pages/settings/settingPage';
import Footer from './components/pagesComponents/footer/footer';
import StartPage from './components/pages/start/startPage';
import { getErrorState } from './selectors';

const App = () => {
    const isError = useSelector(getErrorState);
    return (
        <HashRouter>
            <div className={isError === true ? s.wrapper__error : s.wrapper}>
                <Switch>
                    <Route path='/details' component={BuildDetailsContainer} />
                    <Route path='/build' component={buildHistoryContainer} />
                    <Route path='/setting' component={SettingPage} />
                    <Route path='/start' component={StartPage} />
                    <Route path='/' render={() => <Redirect to='/build' />} />
                </Switch>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
