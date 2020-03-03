/**
 * @description : To display the prime numbers within a range
 * @param { data }
 * @return  Pushes the prime number to a 2D array
 */
exports.findPrime = (arr) => {
    try {
        function isPrime(num) {
            for (let i = 2; i <= num / 2; i++) {
                if (num % i === 0) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(50);
        }
        let j = 0,
            k = 0;
        for (let i = 2; i <= 1000; i++) {
            if (i % 100 === 0) {
                k = 0;
                j++
            }
            let res = isPrime(i);
            if (res) {
                arr[j][k] = i;
                k++
            }
        }
        console.log('Prime no:')
        console.log(arr)
        let arra = new Array(2);
        for (let i = 0; i < arra.length; i++) {
            arra[i] = new Array();
        }
        let ar = [];
        for (let i = 2; i <= 1000; i++) {
            let res = isPrime(i);

            if (res) {
                ar.push(i);
            }
        }

    } catch (error) {
        console.log(error)
    }
}