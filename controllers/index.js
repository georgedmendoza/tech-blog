const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// making a request to any endpoint
router.use((req, res) => {
    // error if endpoint doesnt exist
    res.status(404).end();
});

module.exports = router;