import React, { Component } from 'react';
import './styling.css';
import './profile.css';
import homeLogo from './home.png';
import searchSign from './search.png';
import { Link } from 'react-router-dom';
import Media from "react-media";
import axios from 'axios';


export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            currentUser: {},
            first_name: '',
            last_name: '',
            gender: '',
            // hair_colour: '',
        }
    }

    componentDidMount() {
        axios.get('/api/dash/user')
        .then(res => {
            this.setState({
                currentUser: res.data
                }) 
        }).catch((err) => {
            console.log(err)
        })
    }


    updateFirst = (value) => {
        this.setState({
            first_name: value
        })
    }

    updateLast = (value) => {
        this.setState({
            last_name: value
        })
    }

    updateGender = (value) => {
        this.setState({
            gender: value
        })
    }

    updateAll = (val) => {
        let { ...currentUser } = this.state
        axios.put('/api/user/update', {...currentUser})
        .then(res => {
            let newState = Object.assign({}, this.state.currentUser)
            newState.first_name = this.state.first_name
            newState.last_name = this.state.last_name
            newState.gender = this.state.gender

            

            console.log('newState: ', newState)
            console.log('currentUser: ', currentUser)


            this.setState({
                currentUser: newState
            })
        })
    }

    clearChanges() {
        this.setState({

        })
    }

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
                                <h2 className="page-name">Profile</h2>
                                <Link to="/"><h2 className="logout">Logout</h2></Link>
                            </div>
                                
                            ) : (
                            <div className="nav-bar">
                                <Link to="/Dashboard"><h1 className="helo-header">Helo</h1></Link>
                                <Link to="/Search"><img src={searchSign} alt="Search" className="search-logo"/></Link>
                                <h2 className="page-name">Profile</h2>
                                <Link to="/"><h2 className="logout">Logout</h2></Link>
                            </div>
                            )}
                        </Media>

                <div>
                        <img className="user-img" 
                            src={this.state.currentUser.user_img} 
                            alt={this.state.currentUser.first_name}/>
                        <h1 className="profile-name">
                            {this.state.currentUser.first_name} <br/>
                            {this.state.currentUser.last_name}
                        </h1>
                    <button className="update-btn" onClick={this.updateAll}>Update</button>
                    <button onClick={this.clearChanges}>Cancel</button>
                </div>

                <div>
                    <p>First Name</p>
                    <input type="text" value={this.state.first_name} onChange={e => this.updateFirst(e.target.value)}/>
                </div>
                <div>
                    <p>Last Name</p>
                    <input type="text" onChange={e => this.updateLast(e.target.value)}/>
                </div>
                <div>
                    <p>Gender</p>
                    {/* put value on this select tag, so it shows the state value which the user selected */}
                    <select value={this.state.currentUser.gender} onChange={e => this.updateGender(e.target.value)}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Rainbow">Rainbow</option>
                    </select>
                </div>
                <div>
                    <p>Hair Colour</p>
                    <select value={this.state.currentUser.hair_colour} onChange={e => this.updateHair(e.target.value)}>
                        <option value="brown">Brown</option>
                        <option value="blonde">Blonde</option>
                        <option value="red">Red</option>
                        <option value="rainbow">Rainbow</option>
                    </select>
                </div>
                <div>
                    <p>Eye Colour</p>
                    <select value={this.state.currentUser.eye_colour} onChange={e => this.updateEye(e.target.value)}>
                        <option value="hazel">Hazel</option>
                        <option value="brown">Brown</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <div>
                    <p>Hobby</p>
                    <select value={this.state.currentUser.hobby} onChange={e => this.updateHobby(e.target.value)}>
                        <option value="reading">Reading</option>
                        <option value="photography">Photography</option>
                        <option value="coding">Coding</option>
                        <option value="hiking">Hiking</option>
                        <option value="cycling">Cycling</option>
                    </select>
                </div>
                <div>
                    <p>Birthday Day</p>
                    <select value={this.state.currentUser.birth_day} onChange={e => this.updateDay(e.target.value)}>
                        <option value="1"></option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="22">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                    </select>
                </div>
                <div>
                    <p>Birthday Month</p>
                    <select value={this.state.currentUser.birth_month} onChange={e => this.updateMonth(e.target.value)}>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>

                    </select>
                </div>

                <div>
                    <p>Birthday Year</p>
                    <select value={this.state.currentUser.birth_year} onChange={e => this.updateYear(e.target.value)}>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                            <option value="1939">1939</option>
                            <option value="1938">1938</option>
                            <option value="1937">1937</option>
                            <option value="1936">1936</option>
                            <option value="1935">1935</option>
                            <option value="1934">1934</option>
                            <option value="1933">1933</option>
                            <option value="1932">1932</option>
                            <option value="1931">1931</option>
                            <option value="1930">1930</option>
                    </select>
                </div>

            </div>
        )
    }
}

