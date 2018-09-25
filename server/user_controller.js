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

    // getAllUsers: (req, res) => {
    //     const dbInstance = req.app.get('db');
    //     const { user_id } = req.session.user;

        
    //     dbInstance.view_all([user_id])
    //     .then(response => {
    //             res.status(200).send(response)
    //     }).catch( err => {
    //         console.log(err)
    //     }) 
    // }

    limitView: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user_id } = req.session.user;
        let { page } = req.params;
        page = (page) + 1

        console.log('page: ', page)

            dbInstance.limit_view([user_id, page])
            .then(response => {
                res.status(200).send(response) 
        }).catch( err => {
            console.log(err)
        }) 
    },

    countUsers: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user_id } = req.session.user;
        
            dbInstance.count_users([user_id])
            .then(response => {
                console.log('response in countusers: ', response)
                res.status(200).send(response) 
        }).catch( err => {
            console.log(err)
        }) 
    },

    countSearch: (req, res) => {
        const dbInstance = req.app.get('db');
        const { user_id } = req.session.user;
        
            dbInstance.count_search([user_id])
            .then(response => {
                console.log('response in countSearch: ', response)
                res.status(200).send(response) 
        }).catch( err => {
            console.log(err)
        }) 
    }

}