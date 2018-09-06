const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    // , path = require('path');


    require('dotenv').config();
    const app = express();
    // app.use(express.static(path.join(__dirname, '/build')));

    app.use(bodyParser.json());

    massive(process.env.CONNECTION_STRING).then(db => {
        console.log("database connected!");
        app.set('db', db)
    }).catch( error => console.error('ERROR!', error))


    app.listen(4567, ( ) => {
        console.log(`Listening on port: 4567`)
    });