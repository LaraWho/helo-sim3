import React, { Component } from 'react';
import './navStyle.css';
import './commonStyles.css';
import './dash.css';
import { Link } from 'react-router-dom';
import homeLogo from './home.png';
import searchSign from './search.png';
import Media from "react-media";
import axios from 'axios';
import sweetie from 'sweetalert2';


export default class Dashboard extends Component {
    constructor(props) {
        super(props)
            
            this.state = {
                users: [],
                currentUser: [],
                filteredUsers: [],
                showFilter: false,
                select: '',
                friendList: []
            }
        }

    componentDidMount(){
        this.getUsers()
        this.getCurrentUser()
        this.getFriends()
    }

    
    getUsers = () => {
        axios.get(`/api/friend/list`)
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

    getFriends = (user_id) => {
        axios.get(`/api/user/list/${user_id}`)
        .then( res => {
            this.setState({
                friendList: res.data
            })
          })
      }

    updateInfo = (val) => {
        this.setState({
            select: val
        },
        this.filterUsers()
        )
    }

    filterUsers = () => {
        this.setState({
                showFilter: true
        }) 
    }

    addFriend = (user_id) => {
        let userName = ''
        axios.post(`/api/friend/add/${user_id}`)
        .then(res => {
            userName = this.state.users.map(e => {
                if(e.user_id === res.data[0].friend_id) {
                    return userName = e.first_name
                } else { null }
            }).join('')
            this.getUsers()
            sweetie({
                title: `${userName}`,
                text: `is now your friend!`,
                showConfirmButton: true,
                confirmButtonColor: '#FF9770',
                // timer: 1000,
                padding: '2.5rem'
            })
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {
      
        let checkedUsers = this.state.users.map(person => {
                person = {...person}
                person.isFriend = false
            this.state.friendList.forEach(friend => {
            if(person.user_id === friend.friend_id) {
                person.isFriend = true
                }
            })
            return person
        })

        let filteredUsers = this.state.users.filter(el => {
            return el[this.state.select] === this.state.currentUser[this.state.select]
        }).map(person => {
            person = {...person}
            person.isFriend = false
        this.state.friendList.forEach(friend => {
        if(person.user_id === friend.friend_id) {
            person.isFriend = true
            }
        })
        return person
    })

        let newUserArray = []

        if(!this.state.showFilter) {
            newUserArray = checkedUsers
        } else {
            newUserArray = filteredUsers
        }

        let mappedUsers = newUserArray.map((e, i) => {
            return(
                <div key={ i } className="user-list"> 
                    <img className="user-img" src={e.user_img} alt={e.user_img}/>
                    <h2 className="user-name">
                        {e.first_name} <br/>
                        {e.last_name}
                    </h2>
                   
                    <div>
                    
                    {
                       e.isFriend ?

                   <button className="remove-f-btn" onClick={() => this.removeFriend(e.user_id)}>Remove Friend</button>
                       :
                   <button className="add-f-btn" onClick={() => this.addFriend(e.user_id)}>Add Friend</button>

                   }

                    </div>
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
            
           
                <div className="profile-box">
                    <div className="user-info">
                        <img className="current-user-img" 
                            src={this.state.currentUser.user_img} 
                            alt="user avatar"/>

                        <div className="name-edit-box">
                            <h1 className="dash-name">
                                {this.state.currentUser.first_name} <br/>
                                {this.state.currentUser.last_name}
                            </h1>
                                <Link to="/Profile"><button className="edit-btn">Edit Profile</button></Link>
                        </div>
                        
                    </div>
                    <p className="welcome-msg">Welcome to Helo! Find recommended friends based on your 
                        similarities, and even search for them by name. The more you
                        update your profile, the better recommendations we can make!</p>
                </div>

                <div className="rec-header">
                    <h1 className="rec-friends-head">Recommended Friends</h1>
                    <div className="rec-filter">
                    <p className="rec-friends-p">Sort by users matching my: </p>
                    <select className="rec-friends-select" value={this.state.select} onChange={e => this.updateInfo(e.target.value)}>
                        <option value="select">Attributes...</option>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                        <option value="gender">Gender</option>
                        <option value="hair_colour">Hair Colour</option>
                        <option value="eye_colour">Eye Colour</option>
                        <option value="hobby">Hobby</option>
                        <option value="birth_day">Birth Day</option>
                        <option value="birth_month">Birth Month</option>
                        <option value="birth_year">Birth Year</option>
                    </select>
                    </div>
                </div>
           

                {
                    !mappedUsers[0] ?

                    <p className="no-matches-text">Sorry, no matches :-(</p>

                    :

                    <div className="all-users">
                        { mappedUsers }
                    </div>


                }


                
        </div>

        )
    }
}

