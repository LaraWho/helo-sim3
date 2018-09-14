import React, { Component } from 'react';
import './styling.css';
import './search.css';
import homeLogo from './home.png';
import searchSign from './search.png';
import { Link } from 'react-router-dom';
import Media from "react-media";


export default class Search extends Component {

    render() {
        return(

            <div>
                 <Media query="(min-width: 920px)">
                            {matches =>
                            matches ? (
                            <div className="nav-bar">
                                <h1 className="helo-header">Helo</h1>
                                <Link to="/Dashboard"><img src={homeLogo} alt="Home" className="home-logo"/></Link>
                                <Link to="/Search"><img src={searchSign} alt="Search" className="search-logo"/></Link>
                                <h2 className="page-name">Search</h2>
                                <Link to="/"><h2 className="logout">Logout</h2></Link>
                            </div>
                                
                            ) : (
                            <div className="nav-bar">
                                <Link to="/Dashboard"><h1 className="helo-header">Helo</h1></Link>
                                <Link to="/Search"><img src={searchSign} alt="Search" className="search-logo"/></Link>
                                <h2 className="page-name">Search</h2>
                                <Link to="/"><h2 className="logout">Logout</h2></Link>
                            </div>
                            )}
                        </Media>

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
                    <button className="search-btn">Search</button>
                    <button className="reset-btn">Reset</button>
                </div>

            </div>
        )
    }
}

