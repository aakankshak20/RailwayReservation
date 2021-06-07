let chai = require('chai');
let should = chai.should();
const expect = require('chai').expect;
const request = require('supertest');

const app = "http://localhost:8000/"; //the url is the bookings microservice listening port




describe("Get  for getting train details ", () => {
	it('Test case for gettig train', (done) => {
		request(app)
		.get('trains')
		.expect(200, done);
	});
});