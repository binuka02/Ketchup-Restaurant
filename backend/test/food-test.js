const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Food = require('../models/food');
const sendEmail = require('../sendEmail');

chai.use(chaiHttp)

suite.only("\n***************************** Testing Food Process *****************************\n",()=>{

    test("01. Test Adding a Food", (done)=>{
        chai.request(server)
        .post('/food')
        .send({
            name: "Test Food 1",
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
            done()
        })
        
    })

    test(" I. Test Adding a Food without Food Name", (done)=>{
        chai.request(server)
        .post('/food')
        .send({
            price: 100,
            description: "Testing Food",
            type: "breakfast",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
        
    })

    test(" II. Test Adding a Food without Food Price", (done)=>{
        chai.request(server)
        .post('/food')
        .send({
            name: "Test Food 1",
            description: "Testing Food",
            type: "breakfast",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
        
    })

    test(" III. Test Adding a Food without Description", (done)=>{
        chai.request(server)
        .post('/food')
        .send({
            name: "Test Food 1",
            price: 100,
            type: "breakfast",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
        
    })

    test(" IV. Test Adding a Food without Food Type", (done)=>{
        chai.request(server)
        .post('/food')
        .send({
            name: "Test Food 1",
            price: 100,
            description: "Testing Food",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
            done();
        })
        
    })

    test("02. Test Getting all Food", (done)=>{
        chai.request(server)
        .get('/food')
        .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.be.an('array');
            done();
            
        })
    })

    test("03. Test Getting a Food by ID", async ()=>{
        const food = await Food.findOne({})
            chai.request(server)
            .get('/food/'+food._id)
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
            
        })
    })

    test("04. Test Updating a Food by ID", async()=>{
        const food = await Food.findOne({})
            chai.request(server)
            .patch('/food/'+food._id)
            .send({
                name: "Test Food 2",
                price: 50,
                description: "Testing Update a Food",
                type: "lunch",
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
                

        })
    })

    test(" I. Test Updating a Food without Food Name", ()=>{
        const food = Food.findOne({})
        chai.request(server)
        .patch('/food/'+food._id)
        .send({
            price: 50,
            description: "Testing Update a Food",
            type: "lunch",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(400);
            chai.assert.equal(res.body.msg,'All fields are required');
        })
        
    })

    test(" II. Test Updating a Food without Food Price", async()=>{
        const food = await Food.findOne({})
            chai.request(server)
            .patch('/food/'+food._id)
            .send({
                name: "Test Food 2",
                description: "Testing Update a Food",
                type: "lunch",
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
        })
    })

    test(" III. Test Updating a Food without Food Description", async()=>{
        const food = await Food.findOne({})
            chai.request(server)
            .patch('/food/'+food._id)
            .send({
                name: "Test Food 2",
                price: 50,
                type: "lunch",
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
        })
    })

    test(" IV. Test Updating a Food without Food Type", async()=>{
        const food = await Food.findOne({})
            chai.request(server)
            .patch('/food/'+food._id)
            .send({
                name: "Test Food 2",
                price: 50,
                description: "Testing Update a Food",
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(400);
                chai.assert.equal(res.body.msg,'All fields are required');
        })
    })

    

    test("05. Test Deleting a Food by ID", async()=>{
        const food = await Food.findOne({})
            chai.request(server)
            .delete('/food/'+food._id)
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.an('object');
                // Food.deleteMany({})
                
        })
    })

    test("06. Load Testing of Adding Foods", ()=>{
        for(let i=0;i<20;i++){
            chai.request(server)
        .post('/food')
        .send({
            name: "Test Food 1",
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
        })
        }
        
        
    })

    suiteTeardown(async()=>{
        await Food.deleteMany({})
    })


})