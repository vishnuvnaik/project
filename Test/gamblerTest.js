var assert = require('chai').assert; 
let callFunction = require('../Functional/Gambler/GamblerBL');
describe("", () => {
    it("gambler", () => {
        assert.equal(callFunction.gambling(150, 250, 50, 3));
    });
});

