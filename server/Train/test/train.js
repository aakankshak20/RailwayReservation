
let chai = require('chai');
let should = chai.should();
const expect = require('chai').expect;
const request = require('supertest');

const app = "http://localhost:2000/"; 

const body = {
    Train_Name:'South-North',
    Train_Number:100,
    Source:'Kerla',
    Destination:'Delhi',
    Fair:500
}


describe("POST a new train for user ", () => {
	it('Test case for adding a new train.', (done) => {
		request(app)
		.post('trainadd')
        .send(body)
		.expect(201, done);
	});
});