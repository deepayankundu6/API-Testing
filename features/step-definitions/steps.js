const { expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');
const { getRequest, postRequest, putRequest, deleteRequest } = require('../../crud');
let apiResponse = '';

Given('I make a get all call', async () => {
    apiResponse = await getRequest('https://dummy.restapiexample.com/api/v1/employees');
});

When('The call completes', () => {

});

Then('I get all the data returned from the API', () => {
    expect(apiResponse.status).to.eq("success")
    expect(apiResponse.data.length).to.be.gte(0)
})

Given('I make a get all call with emp id as {string}', async (empNo) => {
    apiResponse = await getRequest('https://dummy.restapiexample.com/api/v1/employee/' + empNo);
});

Then('I get the employee details for the emp no {string}', (empNo) => {
    expect(apiResponse.status).to.eq("success")
    expect(apiResponse.data.id).to.eq(empNo)
});

Given('I make a create call with employee details', async (empDetails) => {
    apiResponse = await postRequest('https://dummy.restapiexample.com/api/v1/create', empDetails.rowsHash());
});

Then('The new employee gets created', () => {
    expect(apiResponse.status).to.eq("success")
    expect(apiResponse.data.is).to.exist
});

Given('I make a delete call with emp id as {string}', async (empNo) => {
    apiResponse = await deleteRequest('https://dummy.restapiexample.com/api/v1/delete/' + empNo);
});

Then('I get the success response', () => {
    expect(apiResponse.status).to.eq("success")
});

Given('I make a update call for employee {string} with details', async (empNo, empDetails) => {
    apiResponse = await putRequest('https://dummy.restapiexample.com/api/v1/update/' + empNo, empDetails.rowsHash());
});

Then('The employee {string} gets updated', (empNo) => {
    expect(apiResponse.status).to.eq("success")
});
