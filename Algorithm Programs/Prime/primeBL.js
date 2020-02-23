

/**
* @description : Prime number    
* @param {Prime Num}
* @return Display prime numbers within the range
*/
//function to calculate the prime numbers
function isprime(num)  
{                                                               
    try {
        if (num == 0 || num == 1)
            return false;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;

    } catch (error) {
        console.log(error)
    }
}
/* function to display the prime number in the range of 0-1000 */
function primeNum()  
{
    try {
        console.log("prime numbers between 0 and 1000 are ")
        for (let i=0;i<=1000;i++)   //for loop to display the numbers within the range 
        {
            if(this.isprime(i))
            {
                console.log(i);
            }
        }

    } catch (error) {
        console.log(error)
    }
}
module.exports= {primeNum}