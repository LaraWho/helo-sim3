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
                users: [],
                currentUser: [],
                filteredUsers: [],
                showFilter: false
            }

    
        }

    componentDidMount(){
        this.getUsers()
        this.getCurrentUser()
    }
    
    getUsers = () => {
        axios.get('/api/friend/list')
        .then(res => {
            this.setState({
                users: res.data
                }) 
            }).catch((err) => {
                console.log(err)
            })
    }

    getCurrentUser = () => {
        axios.get('/api/dash/user')
        .then(res => {
            this.setState({
                currentUser: res.data
                }) 
        }).catch((err) => {
            console.log(err)
        })
    }

    filterUsers = () => {
        this.setState({
                showFilter: true,
                filteredUsers: this.state.users.filter(response => {
                    console.table(response)
                    return response 

            })
        }) 
    }


    render() {
        let newUserArray = []

        if(!this.state.showFilter) {
            newUserArray = this.state.users
        } else {
            newUserArray = this.state.filteredUsers
        }


        let mappedUsers = newUserArray.map((e, i) => {
            return(
                <div key={ i } className="user-list"> 
                    <img src={e.user_img} alt={e.user_img}/>
                    <h2>
                        {e.first_name} <br/>
                        {e.last_name}
                    </h2>
                    <button>Add Friend</button>
                </div>
            )
        })


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
                        <img className="user-img" 
                            src={this.state.currentUser.user_img} 
                            alt={this.state.currentUser.first_name}/>
                        <h1 className="dash-name">
                            {this.state.currentUser.first_name} <br/>
                            {this.state.currentUser.last_name}
                        </h1>
                        <Link to="/Profile"><button className="edit-btn">Edit Profile</button></Link>
                    </div>
                    <p className="welcome-msg">Welcome to Helo! Find recommended friends based on your 
                        similarities, and even search for them by name. The more you
                        update your profile, the better recommendations we can make!</p>
                </div>

                <div>
                    <h1>Recommended Friends</h1>
                    <p>Sorted by </p>
                    <select name="Attributes" onChange={this.filterUsers}>
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
            </div>

                {
                    !this.state.users[0] ?

                    <p>No recommendations</p>

                    :

                    <div>
                    { mappedUsers }
                    </div>


                }

                
        </div>

        )
    }
}

