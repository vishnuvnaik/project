couponCode = (n) => {
    try {
        for (i = 0; i < n; i++) // loop to generate random numbers till n times
        {
            x = Math.floor(Math.random() * 10); // generating random numbers to form coupon codes
            y = Math.floor(Math.random() * 100);
            z = Math.floor(Math.random() * 1000);
            a = Math.floor(Math.random() * 25);
            console.log("the coupon numbers are", x, y, z, a); // printing coupon codes
        }
    }
    catch (error) {
        console.log(error)

    }
}
module.exports = { couponCode }