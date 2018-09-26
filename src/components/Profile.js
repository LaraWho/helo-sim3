import React, { Component } from 'react';
import './navStyle.css';
import './commonStyles.css';
import './profile.css';
import homeLogo from './home.png';
import searchSign from './search.png';
import { Link } from 'react-router-dom';
import Media from "react-media";
import axios from 'axios';
import sweetie from 'sweetalert2';


export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentUser: [],
            first_name: '',
            last_name: '',
            gender: '',
            hair_colour: '',
            eye_colour: '',
            hobby: '',
            birth_day: '',
            birth_month: '',
            birth_year: ''
        }
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = () => {
        axios.get('/api/dash/user')
        .then(res => {
            this.setState({
                currentUser: res.data,
                first_name: res.data.first_name,
                last_name: res.data.last_name,
                gender: res.data.gender,
                hair_colour: res.data.hair_colour,
                eye_colour: res.data.eye_colour,
                hobby: res.data.hobby,
                birth_day: res.data.birth_day,
                birth_month: res.data.birth_month,
                birth_year: res.data.birth_year
                }) 
        }).catch((err) => {
            console.log(err)
        })
    }

    updateFirst = (e) => {
        this.setState({
            first_name: e.target.value
        })
    }

    updateLast = (e) => {
        this.setState({
            last_name: e.target.value
        })
    }

    updateGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    updateHair = (e) => {
        this.setState({
            hair_colour: e.target.value
        })
    }

    updateEye = (e) => {
        this.setState({
            eye_colour: e.target.value
        })
    }

    updateHobby = (e) => {
        this.setState({
            hobby: e.target.value
        })
    }

    updateDay = (e) => {
        this.setState({
            birth_day: e.target.value
        })
    }

    updateMonth = (e) => {
        this.setState({
            birth_month: e.target.value
        })
    }

    updateYear = (e) => {
        this.setState({
            birth_year: e.target.value
        })
    }

    updateAll = () => {
        let { first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year } = this.state
          sweetie({
              title: 'Are you sure you want to make changes?',
              text: 'Also, please fill in your birthday',
              showCancelButton: true,
                confirmButtonColor: '#FF9770',
              cancelButtonColor: '#ccc3c3',
              cancelButtonText: 'Go back!',
              confirmButtonText: 'Update!',
              padding: '2.5rem',

          }).then((result) => {
              if(result.value) {
                axios.patch('/api/user/update', {first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year })
                        .then(res => {
                            this.getUser()
                        })
                    sweetie({
                        title: 'Updated!',
                        text: 'Your profile was updated',
                        showConfirmButton: false,
                        timer: 500,
                        padding: '2.5rem'
                    })
              }
          })
        
        }

    clearChanges = () => {
        sweetie({
            title: 'Are you sure?',
            text: 'Do you really want to cancel your changes?',
            showCancelButton: true,
            confirmButtonColor: '#FF9770',
            cancelButtonColor: '#ccc3c3',
            cancelButtonText: 'No!',
            confirmButtonText: 'Yes!',
            padding: '2.5rem'

        }).then((result) => {
            this.getUser()
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
                <div className="user-info-profile">
                    <div className="img-name-profile">
                        <img className="current-user-img" 
                            src={this.state.currentUser.user_img} 
                            alt={this.state.currentUser.first_name}/>
                        <h1 className="dash-name">
                            {this.state.currentUser.first_name} <br/>
                            {this.state.currentUser.last_name}
                        </h1>
                    </div>
                        <div className="btns">
                            <button className="update-btn" onClick={this.updateAll}>Update</button>
                            <button className="clear-btn" onClick={this.clearChanges}>Cancel</button>
                        </div>
                </div>
                </div>
                                
        <div className="profile-container">
            <div className="all-profile-options">
                <div className="profile-select-box">
                    <p className="profile-title">First Name</p>
                    <input type="text" value={this.state.first_name} onChange={this.updateFirst}
                    placeholder="Type here to update..."/>
                </div>
                <div className="profile-select-box">
                    <p className="profile-title">Last Name</p>
                    <input type="text" value={this.state.last_name} onChange={this.updateLast}
                    placeholder="Type here to update..."/>
                </div>
                <div className="profile-select-box">
                    <p className="profile-title">Gender</p>
                    {/* put value on this select tag, so it shows the state value which the user selected */}
                    <select value={this.state.gender} onChange={this.updateGender}>
                        <option value={this.state.select}>Select...</option>                                
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Rainbow">Rainbow</option>
                    </select>
                </div>
                <div className="profile-select-box">
                    <p className="profile-title">Hair Colour</p>
                    <select value={this.state.hair_colour} onChange={this.updateHair}>
                        <option value="select">Select...</option>
                        <option value="Brown">Brown</option>
                        <option value="Blonde">Blonde</option>
                        <option value="Red">Red</option>
                        <option value="Rainbow">Rainbow</option>
                    </select>
                </div>
                <div className="profile-select-box">
                    <p className="profile-title">Eye Colour</p>
                    <select value={this.state.eye_colour} onChange={this.updateEye}>
                        <option value="select">Select...</option>
                        <option value="Hazel">Hazel</option>
                        <option value="Brown">Brown</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                    </select>
                </div>
                <div className="profile-select-box">
                    <p className="profile-title">Hobby</p>
                    <select value={this.state.hobby} onChange={this.updateHobby}>
                        <option value="select">Select...</option>                                
                        <option value="Reading">Reading</option>
                        <option value="Photography">Photography</option>
                        <option value="Coding">Coding</option>
                        <option value="Hiking">Hiking</option>
                        <option value="Cycling">Cycling</option>
                    </select>
                </div>
                <div className="profile-select-box">
                    <p className="profile-title">Birthday Day</p>
                    <select value={this.state.birth_day} onChange={this.updateDay}>
                        <option value="select">Select...</option>                        
                        <option value="1">1</option>
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
                <div className="profile-select-box">
                    <p className="profile-title">Birthday Month</p>
                    <select value={this.state.birth_month} onChange={this.updateMonth}>
                        <option value="select">Select...</option>
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

                <div className="profile-select-box">
                    <p className="profile-title">Birthday Year</p>
                    <select value={this.state.birth_year} onChange={this.updateYear}>
                            <option value="select">Select...</option>
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
            </div>
        </div>
        )
    }
}


