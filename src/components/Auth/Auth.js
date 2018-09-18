import React, { Component } from 'react';
import './authstyle.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default class Auth extends Component {

    login() {
        let { REACT_APP_CLIENT_ID, REACT_APP_DOMAIN } = process.env
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`

    }

    render() {
        return(

            <div className="auth-body">
                <div className="login-box">
                <Link to="/Dashboard"><img className="helo-logo" src={logo} alt="Helo Logo"/></Link>
                    <h1 className="auth-header">Helo</h1>
                    <button className="auth-login"
                    onClick={this.login}>Login / Register</button>
                </div>

            </div>
        )
    }
}

