const express = require('express')
    , massive = require('massive')
    , session = require('express-session')
    , bodyParser = require('body-parser');
    // , path = require('path');
    
    require('dotenv').config();
    const app = express();
    // app.use(express.static(path.join(__dirname, '/build')));
    
    const friend_cntrl = require('./friend_controller');
    const user_cntrl = require('./user_controller');
    const auth_cntrl = require('./auth_controller');
    
    let {
        SECRET,
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

     //to disable auth0 during production
     app.use((req, res, next) => {
        if(ENVIRONMENT === 'dev') {
            req.app.get('db').set_data().then(userData => {
                req.session.user = userData[0]
                
                next()
            })    
        } else {
            next();
        }    
        })


    //Friend endpoints
    app.get('/api/friend/list', friend_cntrl.getUsers);
    app.post('/api/friend/add/:id', friend_cntrl.addFriend);
    app.delete('/api/friend/remove/:id', friend_cntrl.removeFriend);
    app.get('/api/user/list/:id', friend_cntrl.userFriends);

    //User Endpoints
    app.get('/api/dash/user', user_cntrl.getCurrentUser);
    app.patch('/api/user/update', user_cntrl.updateProfile);
    app.get('/api/user/list', user_cntrl.getAllUsers);
    
    //login endpoints
    app.get('/auth/callback', auth_cntrl.login);
    app.get('/api/user', auth_cntrl.getUser);
    app.get('/logout', auth_cntrl.logout);

   
    
    app.listen(4567, ( ) => {
        console.log(`Listening on port: 4567`)
    });