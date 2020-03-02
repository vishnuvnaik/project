var assert = require('chai').assert;

let callFunction = require('../Datastructures/hashingFunction/hashing');
describe("hashing test", () => {
    it("payment", () => {
        assert.equal(callFunction.hashingFunction());
    });
    it("hashing test 2", () => {
        assert.equal(callFunction.hashingFunction());
    });
});