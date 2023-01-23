const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const Admin = require('../models/admin');

chai.use(chaiHttp)

suite("\n***************************** Testing Admin Login Process *****************************\n",()=>{
    
    test("01. Test Login an Admin", (done)=>{
        chai.request(server)
        .post('/admin')
        .send({
            username: "admin",
            password: "admin123",
        })
        .end((err, res) => {
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('username');
            chai.expect(res.body).to.have.property('password');
            done();
        })  
    })
    
   
})


