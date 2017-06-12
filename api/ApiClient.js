const Promise = require("bluebird");
let request = Promise.promisify(require("request"));
const querystring = require('querystring');

/**
 * Class that consumes services related to school.
 */
class ApiClient {}

ApiClient.getSchools = async function(page) {
    if (isNaN(page)) {
        page = 1;
    }

    let response = await request({json: true, method: 'GET', url: `http://localhost:8080/schools/${page}`});
    if (response.statusCode != 200) {
        throw new Error(`Returned status code ${response.statusCode}`);
    }
    return response.body;
};

ApiClient.getSchoolsByName = async function(name) {
    let response = await request({json: true, method: 'GET', url: `http://localhost:8080/schools/name/${name}`});
    if (response.statusCode != 200) {
        throw new Error(`Returned status code ${response.statusCode}`);
    }
    return response.body;
}

ApiClient.getSchoolsByAdminAndUf = async function(page, adm, uf) {

    var filters = querystring.stringify({adm: adm, uf: uf});

    if (isNaN(page)) {
        page = 1;
    }

    let url = `http://localhost:8080/schools/${page}?${filters}`;
    let response = await request({json: true, method: 'GET', url: url});
    if (response.statusCode != 200) {
        throw new Error(`Returned status code ${response.statusCode}`);
    }
    return response.body;
}

ApiClient.getMunicipalities = async function(state) {
    console.log(state);
    let response = await request({json: true, method: 'GET', url: `http://localhost:8080/state/${state}`});
    if (response.statusCode != 200) {
        throw new Error(`Returned status code ${response.statusCode}`);
    }
    return response.body;
}
module.exports = ApiClient;
