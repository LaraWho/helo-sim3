import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Search from './components/Search';


export default (
    <Switch>
        <Route exact path="/" component={ Auth }/>
        <Route exact path="/Dashboard" component={ Dashboard }/>
        <Route exact path="/Profile" component={ Profile }/>
        <Route exact path="/Search" component={ Search }/>
    </Switch>
)