/**
* @description : Quadratic Equation
* @param {Quadratic}
* @return displays the solution of the quadratic equation
*/

quad = (a, b, c) => {
    try {
        let root1 = 0;
        let root2 = 0;
        delta = b * b - 4 * a * c;
        if (delta > 0) {
            root1 = (-b + Math.sqrt(delta)) / 2 * a;
            root2 = (-b - Math.sqrt(delta)) / 2 * a;
        }

        else if (delta = 0);
        {
            root1 = -b / 2 * a;
        }
        console.log("root1 = ", root1);
        console.log("root2 = ", root2);
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { quad }