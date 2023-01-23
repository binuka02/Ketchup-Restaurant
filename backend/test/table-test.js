const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Tablw = require('../models/table');

chai.use(chaiHttp)

suite("\n***************************** Testing Table Reservation Process *****************************\n",()=>{
        
        test("01. Test Request a Table Reseravtion", (done)=>{
            chai.request(server)
            .post('/table')
            .send({
                firstName: "Test First",
                lastName: "Test Last",
                email: "abc@gmail.com",
                phone: "1234567890",
                date: "2021-05-01",
                time: "12:00",
                seatcount: 2,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(201);
                chai.expect(res.body).to.have.property('firstName');
                chai.expect(res.body).to.have.property('lastName');
                chai.expect(res.body).to.have.property('email');
                chai.expect(res.body).to.have.property('phone');
                chai.expect(res.body).to.have.property('date');
                chai.expect(res.body).to.have.property('time');
                chai.expect(res.body).to.have.property('seatcount');
                done();
            })  
        })
        
        test("02. Test Getting all Table Reservation Requests", (done)=>{
            chai.request(server)
            .get('/table')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('array');
                done();
            })
        })
    
    })