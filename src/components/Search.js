import React, { Component } from 'react';
import './navStyle.css';
import './commonStyles.css';
import './search.css';
import homeLogo from './home.png';
import searchSign from './search.png';
import { Link } from 'react-router-dom';
import Media from "react-media";
import axios from 'axios';


export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allUsers: [],
            filteredUsers: [],
            showFilter: false,
            select: '',
            input: '',
            friendList: [],
            count: '',
            page: 1,
            allToFilter: []
        }

    }

    componentDidMount() {
        this.getAllUsers()
        this.checkFriend()
        this.getAllUsersToFilter()
    }

    countUsers = () => {
        axios.get(`/api/user/everyone`)
        .then(res => {
            this.setState({
                count: Math.ceil(res.data[0].count / 8)
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    nextPage = (page) => {
        let offset = page * 6 - 6

        axios.get(`/api/user/friend/${offset}`)
        .then(res => {
            this.setState({
                allUsers: res.data,
            })
            this.setState({
                page: page
                }) 
            }).catch((err) => {
                console.log(err)
            })
    }

    getAllUsers = () => {
        axios.get(`/api/user/friend/0`)
        .then(res => {
            this.setState({
                allUsers: res.data
                }) 
                this.countUsers()
        }).catch((err) => {
            console.log(err)
        })
    }

    getAllUsersToFilter = () => {
        axios.get('/api/user/list')
        .then(res => {
            this.setState({
                allToFilter: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    checkFriend = (user_id) => {
        axios.get(`/api/user/list/${user_id}`)
        .then( res => {
            this.setState({
                friendList: res.data
            })
          })
      }

    updateSearch = (val) => {
        this.setState({
            select: val
        })
    }

    handleInputChange(value) {
        this.setState({
            input: value
        })
    }

    filterUsers = () => {
        this.setState({
                showFilter: true
        }) 
    }

    toggleFilter = () => {
        this.setState({
            showFilter: false
        })
    }

    addFriend = (user_id) => {
        axios.post(`/api/friend/add/${user_id}`)
        .then(res => {
            this.checkFriend()
        }).catch((err) => {
            console.log(err)
        })
    }

    removeFriend = (user_id) => {
        axios.delete(`/api/friend/remove/${user_id}`)
        .then(res => {
            this.checkFriend()     
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {
        
        let countedPages = []
        for (let i = 1; i <= this.state.count; i++) {
            countedPages.push(<button className="page-btns" key={i} onClick={e => this.nextPage(i)}>{i}</button>);
          }


        let checkedUsers = this.state.allUsers.map(person => {
                person = {...person}
                person.isFriend = false
            this.state.friendList.forEach(friend => {
            if(person.user_id === friend.friend_id) {
                person.isFriend = true
                }
            })
            return person
        })

        let filteredUsers = this.state.allToFilter.filter(el => {
            return el[this.state.select] === this.state.input 
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

        let allUsersArray = []

        if(!this.state.showFilter) {
            allUsersArray = checkedUsers
        } else {
            allUsersArray = filteredUsers
        }

        let mappedUsers = allUsersArray.map((e, i) => {
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

                <div className="search-bar">
                    <select value={this.state.select} onChange={e => this.updateSearch(e.target.value)}>
                        <option value="select">Select...</option>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                    </select>

                    <input className="search-input" type="text" value={this.state.input} onChange={(e) => this.handleInputChange(e.target.value)}/>

                    <button onClick={this.filterUsers} className="search-btn">Search</button>

                    <button onClick={this.toggleFilter} className="reset-btn">Reset</button>

                </div>


                {

                    !mappedUsers[0] ?

                    <p className="no-matches-text">Sorry, no matches :-(</p>

                    :

                    <div className="all-users">
                        { mappedUsers }
                    </div>

                }

                {
                    this.state.showFilter ?
                    
                null
    

                :
                <div className="page-btns-box">
                    
                    {countedPages}

                </div>

                }


            </div>
        )
    }
}

