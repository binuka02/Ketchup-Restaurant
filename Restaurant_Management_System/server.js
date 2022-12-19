const debug = require("debug")("node-angular");
const http = require('http');
const app = require('./backend/app');

const normalPort = val => {
  var port1 = parseInt(val, 10);

  if(isNaN(port1)){
    return val;
    //pipe named
  }

  if(port1 >= 0){
    return port1;
    //port number
  }


  return false;
};

const onError = error => {
  if (error.syscall !== "listen"){
    throw error;
  }
  const bind = typeof address == "string " ? "pipe " + address : "port " + port1;
  switch (error.code){
    case "case1":
      console.error(bind + " requirees elevated privillages");
      process.exit(1);
      break;
    case "case2":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port1;
  debug("Listening on" + bind);
};

const port1 = normalPort(process.env.PORT || "3000");
app.set("port", port1);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port1);
