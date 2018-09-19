import React, { Component } from 'react';
import './styling.css';
import './dash.css';
import { Link } from 'react-router-dom';
import homeLogo from './home.png';
import searchSign from './search.png';
import Media from "react-media";
import axios from 'axios';


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
            
            this.state = {
                users: []
            }

            this.getUsers = this.getUsers.bind(this);
        }

    componentDidMount(){
        this.getUsers()
    }

        getUsers() {
            axios.get('/friend/list')
            .then(res => {
                console.log(res)
                this.setState({
                    users: res.data
                    }) 
                }).catch((err) => {
                    console.log(err)
                    })
                }

    render() {
        console.log(this.state.users)
        return(
            <div>
               <Media query="(min-width: 920px)">
                            {matches =>
                            matches ? (
                            <div className="nav-bar">
                                <h1 className="helo-header">Helo</h1>
                                <Link to="/Dashboard"><img src={homeLogo} alt="Home" className="home-logo"/></Link>
                                <Link to="/Search"><img src={searchSign} alt="Search" className="search-logo"/></Link>
                                <h2 className="page-name">Dashboard</h2>
                                <Link to="/"><h2 className="logout">Logout</h2></Link>
                            </div>
                                
                            ) : (
                            <div className="nav-bar">
                                <Link to="/Dashboard"><h1 className="helo-header">Helo</h1></Link>
                                <Link to="/Search"><img src={searchSign} alt="Search" className="search-logo"/></Link>
                                <h2 className="page-name">Dashboard</h2>
                                <Link to="/"><h2 className="logout">Logout</h2></Link>
                            </div>
                            )}
                        </Media>
            
            <div className="dash-content">
                <div className="profile-box">
                    <div className="user-info">
                        <div className="user-img"></div>
                        <h1 className="dash-name">{this.state.users.first_name}</h1>
                        <Link to="/Profile"><button className="edit-btn">Edit Profile</button></Link>
                    </div>
                    <p className="welcome-msg">Welcome to Helo! Find recommended friends based on your 
                        similarities, and even search for them by name. The more you
                        update your profile, the better recommendations we can make!</p>
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

            </div>
        )
    }
}

