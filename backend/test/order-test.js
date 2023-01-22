// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../app');
// const Order = require('../models/order');

// chai.use(chaiHttp)

// suite("Testing Order Route",()=>{

//     test("Test POST /order (Adding an Order)", (done)=>{
//         chai.request(server)
//         .post('/order')
//         .send({
//             firstname: "Test First",
//             lastname: "Test Last",
//             email: "abc@gmail.com",
//             phone: "1234567890",
//             address: "Test Address",
//             city: "Test City",
//             amount: 100,
//             items: [{
//                 name: "Test Item",
//                 price: 100,
//                 quantity: 1,
//             }],
//         })
//         .end((err, res) => {
//             chai.expect(res).to.have.status(201);
//             chai.expect(res.body).to.have.property('firstname');
//             chai.expect(res.body).to.have.property('lastname');
//             chai.expect(res.body).to.have.property('email');
//             chai.expect(res.body).to.have.property('phone');
//             chai.expect(res.body).to.have.property('address');
//             chai.expect(res.body).to.have.property('city');
//             chai.expect(res.body).to.have.property('amount');
//             chai.expect(res.body).to.have.property('items');
//             done();
//         })
//     })

//     test("Test GET /order (Getting all Orders)", (done)=>{
//         chai.request(server)
//         .get('/order')
//         .end((err, res) => {
//             chai.expect(res).to.have.status(200);
//             chai.expect(res.body).to.be.an('array');
//             done();
//         })
//     })
// })
