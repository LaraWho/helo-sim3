import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Search from './components/Search';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <HashRouter>
          <Switch>
            <Route exact path="/" component={ Auth }/>
            <Route exact path="/Dashboard" component={ Dashboard }/>
            <Route exact path="/Profile" component={ Profile }/>
            <Route exact path="/Search" component={ Search }/>
          </Switch>
        </HashRouter>

      </div>
    );
  }
}

export default App;
