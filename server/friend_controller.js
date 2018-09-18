module.exports = {

        getFriends: (req, res) => {
        const dbInstance = req.app.get('db')
        let user_id = 1

        dbInstance.get_friends([user_id])
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