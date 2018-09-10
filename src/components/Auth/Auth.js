import React, { Component } from 'react';
import './authstyle.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default class Auth extends Component {

    render() {
        return(

            <div className="auth-body">
                <div className="login-box">
                <Link to="/Dashboard"><img className="helo-logo" src={logo} alt="Helo Logo"/></Link>
                    <h1 className="auth-header">Helo</h1>
                    <button className="auth-login">Login / Register</button>
                </div>

            </div>
        )
    }
}

