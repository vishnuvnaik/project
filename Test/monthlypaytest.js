var assert = require('chai').assert;

let callFunction = require('../Algorithm Programs/monthlyPayment/monthlyPayBL');
describe("payment", () => {
    it("payment", () => {
        assert.equal(callFunction.monPay(1000, 3, 8));
    });
    it("payment1", () => {
        assert.equal(callFunction.monPay(5000, 3, 4));
    });
});