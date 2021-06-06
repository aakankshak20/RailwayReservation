var chai=require('chai');
var chaiHttp=require('chai-http');
var server=require('../routes/reservation');
var axios=require('axios');
//Assertion Style
const expect=chai.expect
// 
const should=chai.should();;
chai.use(chaiHttp);

describe('Reservation API', () =>{
    /**
     * Test the GET route
     */
    // describe("GET /reservations", (done) =>{
    //     it('It should GET all reservations', () =>{
    //         chai.request(server)
    //         .get('/reservations')
    //         .end((err,response) => {
    //             response.should.have.status(200);
    //             //response.body.should.be.a('array');
    //         done();
    //         })
    //     })
    // })

    describe("GET /reservations", () =>{
    it('get all reservations',() =>{
        return axios.get('http://localhost:4000/reservations').then(res =>{
            const body=res.data;
           expect(body).to.be.a('array');
        
        
           
        })
       
    })  
})
    /**
     * Test the GET(by id) route
     */

     describe("GET /reservations/:id", () =>{
        it('get all reservations',() =>{
            var id=1;
            return axios.get('http://localhost:4000/reservations/'+id).then(res =>{
                const body=res.data;
               expect(body).to.be.a('array');
            
            
               
            })
           
        })  
    })
    
    /**
     * Test the POST route
     */
    
    /**
     * Test the UPDATE route
     */
    
    /**
     * Test the DELETE route
     */
    
})