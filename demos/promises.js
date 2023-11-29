import axios from 'axios';

const BASE_URL = 'https://httpbin.org';

function successfullRequest() {
    return axios.get(`${BASE_URL}/status/200`);
};

function failedRequest() {
    return axios.get(`${BASE_URL}/status/403`);
};

module.exports = {
    successfullRequest,
    failedRequest
}