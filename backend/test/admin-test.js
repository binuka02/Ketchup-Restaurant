const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Admin = require('../models/admin');
const sendEmail = require("../sendEmail")

chai.use(chaiHttp)

suite("\n***************************** Testing Admin Login Process *****************************\n",()=>{
    
    test("01. Test Admin Signup", ()=>{
        chai.request(server)
        .post('/admin/register')
        .send({
            firstName: "Test First",
            lastName: "Test Last",
            email: "abc@gmail.com",
            username: "test admin",
            password: "admin123",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(201);
            chai.expect(res.body).to.have.property('firstName');
            chai.expect(res.body).to.have.property('lastName');
            chai.expect(res.body).to.have.property('email');
            chai.expect(res.body).to.have.property('username');
            chai.expect(res.body).to.have.property('password');
        })  
    })
    test("01. Test Admin Login", ()=>{
        chai.request(server)
        .post('/admin/login')
        .send({
            username: "admin",
            password: "admin123",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('username');
            chai.expect(res.body).to.have.property('password');
        })  
    })

    test("01. Test Admin Login", ()=>{
        for(let i=0;i<100;i++){
            chai.request(server)
            .post('/admin/login')
            .send({
                username: "admin",
                password: "admin123",
            })
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.have.property('username');
                chai.expect(res.body).to.have.property('password');
            })  

        }
    })

    test(" I. Test Admin Login without entering Username", ()=>{
        chai.request(server)
        .post('/admin/login')
        .send({
            password: "admin123",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(404);
            chai.assert.equal(res.body.msg,'Invalid username or password');
            
        })  
    })

    test(" II. Test Admin Login without entering Password", ()=>{
        chai.request(server)
        .post('/admin/login')
        .send({
            username: "admin",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(404);
            chai.assert.equal(res.body.msg,'Invalid username or password');
            
        })  
    })
   
})


