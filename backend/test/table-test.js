const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Table = require('../models/table');

chai.use(chaiHttp)

suite,("\n***************************** Testing Table Reservation Process *****************************\n",()=>{
        
        //Test Request a Table Reseravtion
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

        //Test Request a Table Reseravtion without giving First Name
        test(" I. Test Request a Table Reseravtion without giving First Name", (done)=>{
            chai.request(server)
            .post('/table')
            .send({
                lastName: "Test Last",
                email: "abc@gmail.com",
                phone: "1234567890",
                date: "2021-05-01",
                time: "12:00",
                seatcount: 2,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
                done();
            })  
        })

        //Test Request a Table Reseravtion without giving Last Name
        test(" II. Test Request a Table Reseravtion without giving Last Name", (done)=>{
            chai.request(server)
            .post('/table')
            .send({
                firstName: "Test First",
                email: "abc@gmail.com",
                phone: "1234567890",
                date: "2021-05-01",
                time: "12:00",
                seatcount: 2,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
                done();
            })  
        })

        //Test Request a Table Reseravtion without giving Email
        test(" III. Test Request a Table Reseravtion without giving Email", (done)=>{
            chai.request(server)
            .post('/table')
            .send({
                firstName: "Test First",
                lastName: "Test Last",
                phone: "1234567890",
                date: "2021-05-01",
                time: "12:00",
                seatcount: 2,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
                done();
            })  
        })

        //Test Request a Table Reseravtion without giving Contact Number
        test(" IV. Test Request a Table Reseravtion without giving Contact Number", (done)=>{
            chai.request(server)
            .post('/table')
            .send({
                firstName: "Test First",
                lastName: "Test Last",
                email: "abc@gmail.com",
                date: "2021-05-01",
                time: "12:00",
                seatcount: 2,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
                done();
            })  
        })

        //Test Request a Table Reseravtion without giving Date
        test(" V. Test Request a Table Reseravtion without giving Date", (done)=>{
            chai.request(server)
            .post('/table')
            .send({
                firstName: "Test First",
                lastName: "Test Last",
                email: "abc@gmail.com",
                phone: "1234567890",
                time: "12:00",
                seatcount: 2,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
                done();
            })  
        })


        //Test Request a Table Reseravtion without giving Time
        test(" VI. Test Request a Table Reseravtion without giving Time", (done)=>{
            chai.request(server)
            .post('/table')
            .send({
                firstName: "Test First",
                lastName: "Test Last",
                email: "abc@gmail.com",
                phone: "1234567890",
                date: "2021-05-01",
                seatcount: 2,
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
                done();
            })  
        })

        //Test Request a Table Reseravtion without giving Seat Count
        test(" VII. Test Request a Table Reseravtion without giving Seat Count", (done)=>{
            chai.request(server)
            .post('/table')
            .send({
                firstName: "Test First",
                lastName: "Test Last",
                email: "abc@gmail.com",
                phone: "1234567890",
                date: "2021-05-01",
                time: "12:00",
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
                done();
            })  
        })
        

        //Test Getting all Table Reservation Requests
        test("02. Test Getting all Table Reservation Requests", (done)=>{
            chai.request(server)
            .get('/table')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('array');
                done();
                // process.exit(0);

            })

        })

    })