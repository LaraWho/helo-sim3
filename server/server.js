const express = require('express')
    , massive = require('massive')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    // , path = require('path');
    
    require('dotenv').config();
    const app = express();
    // app.use(express.static(path.join(__dirname, '/build')));

    
    const friend_cntrl = require('./friend_controller');
    // const user_cntrl = require('./user_controller');
    const auth_cntrl = require('./auth_controller');
    
    let {
        SECRET,
        REACT_APP_DOMAIN,
        REACT_APP_CLIENT_ID,
        CLIENT_SECRET,
        CONNECTION_STRING,
        ENVIRONMENT
    } = process.env
    
    
    massive(CONNECTION_STRING).then(db => {
        console.log("database connected!");
        app.set('db', db)
    }).catch( error => console.error('ERROR!', error))
    
    app.use(bodyParser.json());
    app.use(session({
        secret: SECRET,
        resave: false,
        saveUninitialized: true
    }))


    //Friend endpoints
    app.get('/friend/list', friend_cntrl.getFriends);
    // app.post('/friend/add', friend_cntrl.addFriend);
    // app.post('/friend/remove', friend_cntrl.removeFriend);

    //"Recommended" Endpoints
    // app.post('/recommended', friend_cntrl.recFriends);
    // app.post('/recommended/add', friend_cntrl.addRecFriend);

    //User Endpoints
    // app.patch('/user/patch/:id', user_cntrl.usersList);
    // app.get('/user/list', user_cntrl.getUsers);
    // app.get('/user/search', user_cntrl.searchUsers);

    //to disable auth0 during production
    // app.use((req, res, next) => {
    // if(ENVIRONMENT === 'dev') {
    //     req.app.get('db').set_data().then(userData => {
    //         req.session.user = userData[0]
    //     })
    // } else {
    //     next();
    // }
    // })

    //login endpoints
    app.get('/auth/callback', auth_cntrl.login);
    app.get('/api/user-data', auth_cntrl.getUser);
    app.get('/logout', auth_cntrl.logout);


    app.listen(4567, ( ) => {
        console.log(`Listening on port: 4567`)
    });