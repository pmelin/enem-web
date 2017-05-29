var express = require('express');
var router = express.Router();
var school = require('../controllers/schoolController');

/* GET home page. */
router.get('/', school.getHome);

/* GET how to page. */
router.get('/howTo', function(req, res) {
    res.render('howTo');
});

/* GET school name result. */
router.post('/searchSchoolsByName', school.getSchoolsByName);

module.exports = router;
