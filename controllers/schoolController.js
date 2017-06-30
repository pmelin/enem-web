var apiClient = require('../api/ApiClient');
/**
 * Controller responsible for school routes.
 * @type {Object}
 */
class SchoolController {}

SchoolController.getHome = async(req, res) => {
    try {
        res.render('index');
    } catch (err) {
        console.error(err);
        res.send(500, 'Internal error');
    }
}

SchoolController.getHowToPage = async(req, res) => {
    try {
        res.render('howTo');
    } catch (err) {
        console.error(err);
        res.send(500, 'Internal error');
    }
}

SchoolController.getSchoolsByFilters = async(req, res) => {
    try {
        var filteredSchools = await apiClient.getSchoolsByFilters(req.query.page, req.body.adm, req.body.uf, req.body.municipality, req.body.name, req.body.sortSchl, req.body.orderSchl);
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
