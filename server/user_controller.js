module.exports = {

    getCurrentUser: (req, res) => {
        res.send(req.session.user)

    }
    // usersList: 

    // getUsers:

    // searchUsers:

}