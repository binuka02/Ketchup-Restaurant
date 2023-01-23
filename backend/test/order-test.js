const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Order = require('../models/order');

chai.use(chaiHttp)

suite("\n***************************** Testing Order Process *****************************\n",()=>{

    test("01. Test Adding an Order", (done)=>{
        chai.request(server)
        .post('/order')
        .send({
            firstname: "Test FirstName",
            lastname: "Test LastName",
            email: "abc@gmail.com",
            phone: "1234567890",
            address: "Test Address",
            city: "Test City",
            amount: 100,
            items: [{
                name: "Test Item",
                price: 100,
                quantity: 1,
            }],
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(201);
            chai.expect(res.body).to.have.property('firstname');
            chai.expect(res.body).to.have.property('lastname');
            chai.expect(res.body).to.have.property('email');
            chai.expect(res.body).to.have.property('phone');
            chai.expect(res.body).to.have.property('address');
            chai.expect(res.body).to.have.property('city');
            chai.expect(res.body).to.have.property('amount');
            chai.expect(res.body).to.have.property('items');
            done();
        })
    })

    //Test Adding an Order without First Name
    test("01. I. Test Adding an Order without First Name", (done)=>{
        chai.request(server)
        .post('/order')
        .send({
            lastname: "Test LastName",
            email: "abc@gmail.com",
            phone: "1234567890",
            address: "Test Address",
            city: "Test City",
            amount: 100,
            items: [{
                name: "Test Item",
                price: 100,
                quantity: 1,
            }],
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
    })

    //Test Adding an Order without Last Name
    test("01. II. Test Adding an Order without Last Name", (done)=>{
        chai.request(server)
        .post('/order')
        .send({
            firstname: "Test FirstName",
            email: "abc@gmail.com",
            phone: "1234567890",
            address: "Test Address",
            city: "Test City",
            amount: 100,
            items: [{
                name: "Test Item",
                price: 100,
                quantity: 1,
            }],
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
    })

    //Test Adding an Order without Email
    test("01. III. Test Adding an Order without Email", (done)=>{
        chai.request(server)
        .post('/order')
        .send({
            firstname: "Test FirstName",
            lastname: "Test LastName",
            phone: "1234567890",
            address: "Test Address",
            city: "Test City",
            amount: 100,
            items: [{
                name: "Test Item",
                price: 100,
                quantity: 1,
            }],
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
    })

    //Test Adding an Order without Contact Number
    test("01. IV. Test Adding an Order without Contact Number", (done)=>{
        chai.request(server)
        .post('/order')
        .send({
            firstname: "Test FirstName",
            lastname: "Test LastName",
            email: "abc@gmail.com",
            address: "Test Address",
            city: "Test City",
            amount: 100,
            items: [{
                name: "Test Item",
                price: 100,
                quantity: 1,
            }],
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
    })

    //Test Adding an Order without Address
    test("01. V. Test Adding an Order without Address", (done)=>{
        chai.request(server)
        .post('/order')
        .send({
            firstname: "Test FirstName",
            lastname: "Test LastName",
            email: "abc@gmail.com",
            phone: "1234567890",
            city: "Test City",
            amount: 100,
            items: [{
                name: "Test Item",
                price: 100,
                quantity: 1,
            }],
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
    })

    //Test Adding an Order without City
    test("01. VI. Test Adding an Order without City", (done)=>{
        chai.request(server)
        .post('/order')
        .send({
            lastname: "Test LastName",
            email: "abc@gmail.com",
            phone: "1234567890",
            address: "Test Address",
            amount: 100,
            items: [{
                name: "Test Item",
                price: 100,
                quantity: 1,
            }],
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
    })

    //Test Adding an Order without Amount
    test("01. VII. Test Adding an Order without Amount", ()=>{
        chai.request(server)
        .post('/order')
        .send({
            lastname: "Test LastName",
            email: "abc@gmail.com",
            phone: "1234567890",
            address: "Test Address",
            city: "Test City",
            items: [{
                name: "Test Item",
                price: 100,
                quantity: 1,
            }],
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            
        })
    })

    //Test Adding an Order without Items
    test("01. VIII. Test Adding an Order without Items", (done)=>{
        chai.request(server)
        .post('/order')
        .send({
            lastname: "Test LastName",
            email: "abc@gmail.com",
            phone: "1234567890",
            address: "Test Address",
            city: "Test City",
            amount: 100,
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
    })


    test("02. Test Getting all Orders", (done)=>{
        chai.request(server)
        .get('/order')
        .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.be.an('array');
            done();
        })
    })
})
