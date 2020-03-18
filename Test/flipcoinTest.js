var assert = require("chai").assert;
let callFunction = require('../Functional/Flipcoin/flipcoinBL')
describe("", () => {
    it("flipcoin", () => {
        assert.equal(callFunction.Flip(5));
    });
});