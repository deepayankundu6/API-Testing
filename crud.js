const fetch = require('node-fetch');

const getRequest = async (url) => {
    let response = '';
    try {
        response = await fetch(url);
        response = await response.json();
    } catch (error) {
        console.log("Error occured: ", error);
    }
    return response;
}

const postRequest = async (url, payload) => {
    let response = '';
    try {
        response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        response = await response.json();
    } catch (error) {
        console.log("Error occured: ", error);
    }
    return response;
}

const putRequest = async (url, payload) => {
    let response = '';
    try {
        response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
        response = await response.json();
    } catch (error) {
        console.log("Error occured: ", error);
    }
    return response;
}

const deleteRequest = async (url) => {
    let response = '';
    try {
        response = await fetch(url, {
            method: 'DELETE'
        });
        response = await response.json();
    } catch (error) {
        console.log("Error occured: ", error);
    }
    return response;
}

module.exports = { getRequest, postRequest, putRequest, deleteRequest };