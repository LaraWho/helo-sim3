const axios = require('axios')
module.exports = {

        login: async (req, res) => {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID, CLIENT_SECRET } = process.env
        
        let payload = {
            client_id: REACT_APP_CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: req.query.code,
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }
        
        let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
        
        let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)
        
        const db = req.app.get('db')
        const { given_name, family_name, sub } = userRes.data;
        console.log("userRes.data", userRes.data)
    
        let foundUser = await db.find_user( [sub] )
            if(foundUser[0]) {
                req.session.user = foundUser[0];
            console.log("req.session.user", req.session.user)
                
            } else {
                let createdUser = await db.create_user( [ given_name, family_name, sub ] )
                req.session.user = createdUser
            }
            res.redirect('/#/dashboard');
    },

    getUser: (req, res) => {
        if(req.session.user) {
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send('Go log in!')
        }
    },
    
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('http://localhost:3000/#/');
    }


}