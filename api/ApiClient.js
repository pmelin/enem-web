const Promise = require("bluebird");
let request = Promise.promisify(require("request"));
const querystring = require('querystring');

/**
 * Class that consumes services related to school.
 */
class ApiClient {}

ApiClient.getSchoolsByFilters = async function(page, adm, uf, municipality, name, sortSchl, orderSchl) {

    var filters = querystring.stringify({adm: adm, uf: uf, municipality: municipality, name: name, sortSchl: sortSchl, orderSchl: orderSchl});

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
    let response = await request({json: true, method: 'GET', url: `http://localhost:8080/state/${state}`});
    if (response.statusCode != 200) {
        throw new Error(`Returned status code ${response.statusCode}`);
    }
    return response.body;
}
module.exports = ApiClient;
