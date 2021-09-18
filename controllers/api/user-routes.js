const router = require('express').Router();
const { User } = require('../../models/User')

//get all 
router.get('/', (req,res) => {
    User.findAll({
        attributes: ['password']
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

})

// update one
router.put('/:id', (req,res) => {

})

// delete one
router.delete('/:id', (req,res) => {

})