/**
 * @description : Monthly payment   
 * @param {monthlyPay}
 * @return Input the principle amount, rate of interest and year and calculates the monthly payment to be performed .
 */

monPay = (p, y, r) => {
    try {
        /* declare the payment and the formula for calculating the monthly payment */
        let payment;
        let R = r / (12 * 100);
        let n = 12 * y;
        payment = (p * R) / 1 - Math.pow((1 + r), -n); // Formula for calculating the monthly payment 
        console.log(" payment = ", payment); //outputs the result

    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    monPay
};