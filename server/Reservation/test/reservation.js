var chai=require('chai');
const request=require('supertest');
const expect=require('chai').expect;

const should=chai.should();;


const app="http://localhost:4000/";

const body ={
    Reservation_Date:'2021-06-23',
    Source:'Agra',
    Destination:'Mumbai',
    Train_Name:'Agra Express',
    Train_Number:123,
    Passenger:3,
    Class:'second'   
}

describe('Post a new Reservation',() =>{
    it("Test case for Making new Reservation" , (done) =>{
        request(app)
		.post('reservation')
    .send(body)
		.expect(201, done);
	});
})