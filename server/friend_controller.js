module.exports = {

        getFriends: (req, res) => {
        const dbInstance = req.app.get('db')
        let { user_id } = req.session.user
            console.log(req.session.user)
        dbInstance.get_users([user_id])
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