const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/withAuth');
const { response } = require('express');

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

})

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

// update one
router.put('/:id', (req,res) => {

})

// delete one
router.delete('/:id', (req,res) => {

})

module.exports = router;