module.exports = {

    getCurrentUser: (req, res) => {
        res.send(req.session.user)

    },

    updateProfile: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user_id } = req.session.user.user_id;
        const { first_name, last_name, gender } = req.body.currentUser;

        console.log('req.body.currentUser: ', req.body.currentUser)

        dbInstance.update_user([ user_id, first_name, last_name, gender ])
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