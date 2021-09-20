const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/withAuth');

//get all 
router.get('/', (req,res) => {
    User.findAll({
        attributes: {exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one
router.get('/:id', (req,res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id','title','post_url','created_at']
            }
            // {
            //     model: Comment,
            //     attributes: ['id','comment_text','created-at'],
            //     include: {
            //         model: Post,
            //         attributes: ['title']
            //     }
            // }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'no User with that ID found' });
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post new 
router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    // .then(dbUserData => {
    //     req.session.save(() => {
    //         req.session.user_id = dbUserData.user_id;
    //         req.session.username = dbUserData.username;
    //         req.session.loggedIn = true;

    //         res.json(dbUserData);
    //     })
    // })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {

});

router.post('/logout', (req,res) => {

});

// update one
router.put('/:id', (req,res) => {

   // pass in req.body instead to only update what's passed through
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'no User with that ID found' });
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

// delete one
router.delete('/:id', (req,res) => {
    User.destroy({
        where: {
            id: req.params.id  
        }
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'no User with that ID found' });
            return;
        }
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;