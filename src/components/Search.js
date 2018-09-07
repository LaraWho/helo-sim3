import React, { Component } from 'react';
import './styling.css';
import homeLogo from './home.png';
import searchSign from './search.png'

export default class Search extends Component {

    render() {
        return(

            <div>
                 <div className="nav-bar">
                    <h1>Helo</h1>
                    <img src={homeLogo} alt="Home"/>
                    <img src={searchSign} alt="Search"/>
                    <h2>Search</h2>
                    <h2>Logout</h2>
                </div>

                <div>
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
                    <input type="text"/>
                    <button>Search</button>
                    <button>Reset</button>
                </div>

            </div>
        )
    }
}

