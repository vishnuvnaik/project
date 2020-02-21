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
function primeNum()
{
    try {
        console.log("prime numbers between 0 and 1000 are ")
        for (let i=0;i<=1000;i++)
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