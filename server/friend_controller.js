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
    
    },

        addFriend: (req, res) => {
        const dbInstance = req.app.get('db')
        let {user_id} = req.session.user
        let friend_id = req.params.id

        // console.log('user_id: ', user_id)
        // console.log('friend_id: ', friend_id)

            
        dbInstance.add_friend([ user_id, friend_id])
        .then(users => {
            res.status(200).send(users)
            
        }).catch( err => {
            res.sendStatus(500)
            console.log(err)
        })

    },

    removeFriend: (req, res) => {
        const dbInstance = req.app.get('db');
        const  {user_id}  = req.session.user;
        const friend_id = req.params.id;

            console.log('req.session.user is', info)
            console.log('req.params.id is', friend_id)

        dbInstance.remove_friend( [friend_id, user_id] )
        .then(users => {
            res.status(200).send(users) 
        })
        .catch( err => {
            res.sendStatus(500)
            console.log(err)
        } )
    }
}