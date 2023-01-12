let chai = require("chai");
let functions = require("../functions");

suite ("Unit Tests", function() {
  test("Testing for correct username and password", function() {
    assert.equal(functions.login("admin", "admin"), true);
  });
  test("Testing for incorrect username and password", function() {
    assert.equal(functions.login("admin", "admin1"), false);
  });
});
