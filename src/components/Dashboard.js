import React, { Component } from 'react';
import './styling.css';
import { Link } from 'react-router-dom';
import homeLogo from './home.png';
import searchSign from './search.png'

export default class Dashboard extends Component {

    render() {
        return(
            <div>
                <div className="nav-bar">
                    <h1>Helo</h1>
                    <img src={homeLogo} alt="Home"/>
                    <img src={searchSign} alt="Search"/>
                    <h2>Dashboard</h2>
                    <h2>Logout</h2>
                </div>

                <div>
                    <Link to="/Profile"><button>Edit Profile</button></Link>
                </div>

                <div>
                    <p>Welcome to Helo! Find recommended friends based on your 
                        similarities, and even search for them by name. The more you
                        update your profile, the better recommendations we can make! </p>
                </div>

                <div>
                    <h1>Recommended Friends</h1>
                    <p>Sorted by </p>
                    <select name="Attributes">
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="gender">Gender</option>
                        <option value="hairColour">Hair Colour</option>
                        <option value="eyeColour">Eye Colour</option>
                        <option value="hobby">Hobby</option>
                        <option value="birthDay">Birth Day</option>
                        <option value="birthMonth">Birth Month</option>
                        <option value="birthYear">Birth Year</option>
                    </select>
                </div>

                <div>
                    <p>No Recommendations!</p>
                </div>

            </div>
        )
    }
}

