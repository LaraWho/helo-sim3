import React, { Component } from 'react';
import './styling.css';
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
            input: ''
        }

    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('/api/user/list')
        .then(res => {
            this.setState({
                allUsers: res.data
                }) 
        }).catch((err) => {
            console.log(err)
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
                showFilter: true,
                filteredUsers: this.state.allUsers.filter(el => {
                    return el[this.state.select] === this.state.input 
                })
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
            // console.table(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {

        let allUsersArray = []

        if(!this.state.showFilter) {
            allUsersArray = this.state.allUsers
        } else {
            allUsersArray = this.state.filteredUsers
        }

        let mappedUsers = allUsersArray.map((e, i) => {
            return(
                <div key={ i } className="user-list"> 
                    <img src={e.user_img} alt={e.user_img}/>
                    <h2>
                        {e.first_name} <br/>
                        {e.last_name}
                    </h2>
                    <button onClick={() => this.addFriend(e.user_id)}>Add Friend</button>
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

                <div>
                    <select value={this.state.select} onChange={e => this.updateSearch(e.target.value)}>
                        <option value="select">Select...</option>
                        <option value="first_name">First Name</option>
                        <option value="last_name">Last Name</option>
                    </select>

                    <input type="text" value={this.state.input} onChange={(e) => this.handleInputChange(e.target.value)}/>

                    <button onClick={this.filterUsers} className="search-btn">Search</button>

                    <button onClick={this.toggleFilter} className="reset-btn">Reset</button>

                </div>


                {

                    !mappedUsers[0] ?

                    <p>Sorry, no matches :-(</p>

                    :

                    <div>
                        { mappedUsers }
                    </div>

                }
                

            </div>
        )
    }
}

