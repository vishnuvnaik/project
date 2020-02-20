/**
* @description : Harmonic Number
* @param {string}
* @return displays the sum of harmonic number series
*/

nthHarmonic = (N) => {
    try {
        // H1 = 1
        var harmonic = 1;
        // loop to apply the forumula
        // Hn = H1 + H2 + H3 ... + Hn-1 + Hn-1 + 1/n
        for (var i = 2; i <= N; i++) {
            harmonic += 1 / i;
        }
        return harmonic;
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = { nthHarmonic }