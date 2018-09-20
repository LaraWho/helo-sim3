module.exports = {

        getUsers: (req, res) => {
        const dbInstance = req.app.get('db')
        let info = req.session.user.user_id
            
        dbInstance.get_users([info])
        .then(users => {
           
            res.status(200).send(users)
            
        }).catch( err => {
            res.sendStatus(500)
            console.log(err)
        })
    
    }

    // addFriend:

    // removeFriend:

    // recFriends:

    // addRecFriend:
    
}