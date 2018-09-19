module.exports = {

        getUsers: (req, res) => {
        const dbInstance = req.app.get('db')
        let info = req.session.user.user_id
            console.log(1111111111, info)
        dbInstance.get_users([info])
        .then(users => {
            console.log(users)
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