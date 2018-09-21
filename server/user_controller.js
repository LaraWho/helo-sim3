module.exports = {

    getCurrentUser: (req, res) => {
        res.send(req.session.user)

    },

    updateProfile: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user_id } = req.session.user;
        const { first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year  } = req.body;

        console.log('req.body: ', req.body)
        console.log(user_id)

        dbInstance.update_user([ first_name, last_name, gender, hair_colour, eye_colour, hobby, birth_day, birth_month, birth_year, user_id ])
        .then(response => {
            console.log('response: ', response)

            res.status(200).send(response) 
        }) 
        .catch( err => {
            console.log(err)
        }) 
    }
    // usersList: 

    // getUsers:

    // searchUsers:

}