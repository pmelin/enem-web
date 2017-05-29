var apiClient = require('../api/ApiClient');
/**
 * Controller responsible for school routes.
 * @type {Object}
 */
class SchoolController {}

SchoolController.getHome = async(req, res) => {
    try {
        //  console.log(`req.params.page=${req.query.page}`);
        var schools = await apiClient.getSchools(req.query.page);
        res.render('index', {schools: schools});
    } catch (err) {
        console.error(err);
        res.render(500, 'Internal error');
    }
}

SchoolController.getSchoolsByName = async(req, res) => {
    try {
        var schools = await apiClient.getSchoolsByName(req.body.name);
        res.render('index', {schools: schools});
    } catch (err) {
        res.render(500, 'Internal error');
    }
}
module.exports = SchoolController;
