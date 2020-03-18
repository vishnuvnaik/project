var assert = require('chai').assert;
let callFunction = require('../Functional/stopWatch/stopWatchBL')
describe(" ", () => {
    it("Stopwatch", () => {
        assert.equal(callFunction.stopWatch(5, 5))
    });
});