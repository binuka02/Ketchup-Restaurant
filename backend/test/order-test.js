const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Customer = require('../models/customer');
const Order = require('../models/order');

chai.use(chaiHttp)

suite("\n***************************** Testing Order Process *****************************\n",()=>{

    test("01. Test Adding an Order",async()=>{
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
            chai.expect(res.body.order).to.have.property('firstname');
            chai.expect(res.body.order).to.have.property('lastname');
            chai.expect(res.body.order).to.have.property('email');
            chai.expect(res.body.order).to.have.property('phone');
            chai.expect(res.body.order).to.have.property('address');
            chai.expect(res.body.order).to.have.property('city');
            chai.expect(res.body.order).to.have.property('amount');
            chai.expect(res.body.order).to.have.property('items');
            chai.expect(res.body.customer).to.have.property('firstname');
            chai.expect(res.body.customer).to.have.property('lastname');
            chai.expect(res.body.customer).to.have.property('email');
            chai.expect(res.body.customer).to.have.property('phone');
            chai.expect(res.body.customer).to.have.property('address');
            chai.expect(res.body.customer).to.have.property('city');
        })
    })

    //Test Adding an Order without First Name
    test(" I. Test Adding an Order without First Name", async()=>{
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
        
        })
    })

    //Test Adding an Order without Last Name
    test(" II. Test Adding an Order without Last Name", (done)=>{
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
    test(" III. Test Adding an Order without Email", (done)=>{
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
    test(" IV. Test Adding an Order without Contact Number", (done)=>{
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
    test(" V. Test Adding an Order without Address", (done)=>{
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
    test(" VI. Test Adding an Order without City", (done)=>{
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
    test(" VII. Test Adding an Order without Amount", ()=>{
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
    test(" VIII. Test Adding an Order without Items", (done)=>{
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


    test("02. Test Getting all Orders", async()=>{
        chai.request(server)
        .get('/order')
        .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.be.an('array');
            
        })
    })

    test("03. Load testing of Making Orders", async()=>{
        for(let i=0;i<20;i++){
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
                chai.expect(res.body.order).to.have.property('firstname');
                chai.expect(res.body.order).to.have.property('lastname');
                chai.expect(res.body.order).to.have.property('email');
                chai.expect(res.body.order).to.have.property('phone');
                chai.expect(res.body.order).to.have.property('address');
                chai.expect(res.body.order).to.have.property('city');
                chai.expect(res.body.order).to.have.property('amount');
                chai.expect(res.body.order).to.have.property('items');
                chai.expect(res.body.customer).to.have.property('firstname');
                chai.expect(res.body.customer).to.have.property('lastname');
                chai.expect(res.body.customer).to.have.property('email');
                chai.expect(res.body.customer).to.have.property('phone');
                chai.expect(res.body.customer).to.have.property('address');
                chai.expect(res.body.customer).to.have.property('city');
    
            })
        }
        
    })

    suiteTeardown(async()=>{
        await Order.deleteMany({})
        await Customer.deleteMany({})
    })

    
})
