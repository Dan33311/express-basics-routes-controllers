const express = require('express');
const router = express.Router();
const test_controllers = require('../controllers/test_controller');


router.get('/route1', test_controllers.route1);

router.get('/route2', test_controllers.route2);


// module.exports = router;