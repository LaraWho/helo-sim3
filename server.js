const express = require('express')
    , massive = require('massive')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    // , path = require('path');
    
    require('dotenv').config();
    const app = express();
    // app.use(express.static(path.join(__dirname, '/build')));

    app.use(bodyParser.json());

    // const friend_cntrl = require('./friend_controller');
    // const user_cntrl = require('./user_controller');

    massive(process.env.CONNECTION_STRING).then(db => {
        console.log("database connected!");
        app.set('db', db)
    }).catch( error => console.error('ERROR!', error))

    //Friend endpoints
    // app.get('/friend/list', friend_cntrl.getFriends);
    // app.post('/friend/add', friend_cntrl.addFriend);
    // app.post('/friend/remove', friend_cntrl.removeFriend);

    //"Recommended" Endpoints
    // app.post('/recommended', friend_cntrl.recFriends);
    // app.post('/recommended/add', friend_cntrl.addRecFriend);

    //User Endpoints
    // app.patch('/user/patch/:id', user_cntrl.usersList);
    // app.get('/user/list', user_cntrl.getUsers);
    // app.get('/user/search', user_cntrl.searchUsers);



    app.listen(4567, ( ) => {
        console.log(`Listening on port: 4567`)
    });