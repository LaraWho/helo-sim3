module.exports = {

    getCurrentUser: (req, res) => {
        res.send(req.session.user)

    },

    updateProfile: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user_id } = req.session.user;
        const { first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year  } = req.body;

        dbInstance.update_user([ first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_id ])
        .then(response => {
            res.status(200).send(response) 
        }).catch( err => {
            console.log(err)
        }) 
    },
    // usersList: 

        getAllUsers: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user_id } = req.session.user;

        
        dbInstance.view_all([user_id])
        .then(response => {
            res.status(200).send(response) 
        }).catch( err => {
            console.log(err)
        }) 
    },

    searchUsers: (req, res) => {
        const dbInstance = req.app.get('db');
        let { first_name, last_name } = req.body

        dbInstance.search_name([first_name, last_name])
        .then(response => {
            console.log('response in user controller: ', response)
            res.status(200).send(response) 
        }).catch( err => {
            console.log(err)
        }) 

    }

}