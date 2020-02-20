/**
* @description : Flipcoin
* @param {Coin Flip}
* @return displays the number of heads and tails and percentage of the same while flipping a coin
*/

Flip=(num) =>
{
try {
let heads = 0; // head count is assigned to zero
let tails = 0; // tail count is assigned to zero
for(i=0;i<num;i++)
{
x = Math.floor(Math.random() * 10); //random number generation
console.log(x)
if(x>5)
{
    tails++ //tail counts incremented when x is greater than 5
}
else
{
    heads++ //head count incremented when x is less than 5
}
}
// printing outputs
console.log('number of heads is ',heads)
console.log("number of tails is ",tails)
headp = heads/num *100 ;
tailp = tails/num *100;
console.log('heads percentage =',headp);
console.log('tails percentage = ',tailp);   
} 
catch (error) 
{
    console.log(error)
    
}
}
module.exports= {Flip}