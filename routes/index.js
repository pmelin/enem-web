var express = require('express');
var router = express.Router();
var school = require('../controllers/schoolController');

/* GET home page. */
router.get('/', school.getHome);

/* GET how to page. */
router.get('/howTo', function(req, res) {
    res.render('howTo');
});

/* POST school name result. */
router.post('/searchSchoolsByName', school.getSchoolsByName);

/* POST school filters. */
router.post('/filters', school.getSchoolsByAdminAndUf);
router.get('/filters', function(req, res) {
    res.render('index');
});

/* GET state municipalities. */
router.get('/municipalities/:state', school.getMunicipalities);

module.exports = router;
