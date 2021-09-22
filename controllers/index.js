const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes.js');

const apiRoutes = require('./api');

// '' define the prefix for those routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// making a request to any endpoint
router.use((req, res) => {
    // error if endpoint doesnt exist
    res.status(404).end();
});

module.exports = router;