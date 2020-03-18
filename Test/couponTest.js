var assert = require("chai").assert;
let callFunction = require('../Functional/Coupon/CouponBL')
describe(" ", () => {
    it("Coupon", () => {
        assert.equal(callFunction.couponCode(5))
    });
});
