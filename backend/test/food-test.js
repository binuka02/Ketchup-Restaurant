const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Food = require('../models/food');
const sendEmail = require('../sendEmail');

chai.use(chaiHttp)

suite("Testing Food Route",()=>{

    test("Test POST /food (Adding a Food)", (done)=>{
        chai.request(server)
        .post('/food')
        .send({
            name: "Test Food",
            price: 100,
            description: "Testing Food",
            type: "breakfast",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(201);
        
            chai.expect(res.body).to.have.property('name');
            chai.expect(res.body).to.have.property('price');
            chai.expect(res.body).to.have.property('description');
            chai.expect(res.body).to.have.property('type');
            chai.expect(res.body).to.have.property('imageUrl');
            done();
        })
        
    })

    test("Test GET /food (Getting all Food)", (done)=>{
        chai.request(server)
        .get('/food')
        .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.be.an('array');
            done();
            
        })
    })

    test("Test GET /food/:id (Getting a Food by ID)", (done)=>{
        Food.findOne({}, (err, food) => {
            chai.request(server)
            .get('/food/'+food._id)
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
                done();
            })
        })
    })

    test("Test PUT /food/:id (Updating a Food by ID)", (done)=>{
        Food.findOne({}, (err, food) => {
            chai.request(server)
            .patch('/food')
            .send({
                name: "Test Food",
                price: 100,
                description: "Testing Food",
                type: "breakfast",
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(404);
                chai.expect(res.body).to.be.an('object');
                done();

            })
        })
    })

    test("Test DELETE /food/:id (Deleting a Food by ID)", (done)=>{
        Food.findOne({}, (err, food) => {
            chai.request(server)
            .delete('/food')
            .end((err, res) => {
                chai.expect(res).to.have.status(404);
                chai.expect(res.body).to.be.an('object');
                done();
                

            })
        })
    })


})