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
        res.send(500, 'Internal error');
    }
}

SchoolController.getSchoolsByName = async(req, res) => {
    try {
        var schools = await apiClient.getSchoolsByName(req.body.name);
        res.render('index', {schools: schools});
    } catch (err) {
        res.send(500, 'Internal error');
    }
}

SchoolController.getSchoolsByAdminAndUf = async(req, res) => {
    try {
        var filteredSchools = await apiClient.getSchoolsByAdminAndUf(req.query.page, req.body.adm, req.body.uf);
        res.json(200, filteredSchools);
    } catch (err) {
        console.error(err);
        res.send(500, 'Internal error');
    }
}

SchoolController.getMunicipalities = async(req, res) => {
    try {
        var municipalities = await apiClient.getMunicipalities(req.params.state);
        res.json(200, municipalities);
    } catch (err) {
        console.error(err);
        res.send(500, 'Internal error');
    }
}
module.exports = SchoolController;
