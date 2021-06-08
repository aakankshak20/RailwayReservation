const expect = require('chai').expect;
const request = require('supertest');

const app="http://localhost:3000/";

const body={
    name:'john',
    email:'john@gmail.com',
    password:'john123'
}

//describing our test case
describe("Post Passenger",() =>{
    it('Test case for New Passenger',(done) =>{
        request(app)
        .post('register')
    .send(body)
     .expect(200,done);
    });
});