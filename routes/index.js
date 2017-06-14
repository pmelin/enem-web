var express = require('express');
var router = express.Router();
var school = require('../controllers/schoolController');

/* GET home page. */
router.get('/', school.getHome);

/* GET how to page. */
router.get('/howTo', school.getHowToPage);

/* POST school filters. */
router.post('/filters', school.getSchoolsByFilters);

/* GET state municipalities. */
router.get('/municipalities/:state', school.getMunicipalities);

module.exports = router;
