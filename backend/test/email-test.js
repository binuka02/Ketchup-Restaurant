const chaiHttp = require("chai-http")
const sendEmail = require("../sendEmail")
const chai = require("chai")

suite.only("\n***************************** Testing Email *****************************\n",()=>{
            setup(()=>{console.log("Setup")})
            //Test Request a Table Reseravtion
            test("Send Email", async()=>{
                const user = {
                    email: "wabgsilva2@gmail.com",
                    name: "Wabg Silva",
                    amount: 100
                }
                console.log(user)
                await sendEmail(user,info => {
   
                    console.log(`The mail has beed send and the id is ${info.messageId}`);
                    chai.expect(info).to.haveOwnProperty('messageId')
                  
                
                 })})

})