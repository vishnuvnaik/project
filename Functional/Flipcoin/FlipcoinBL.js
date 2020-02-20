/**
* @description : Flipcoin
* @param {Coin Flip}
* @return displays the number of heads and tails and percentage of the same while flipping a coin
*/

Flip=(num) =>
{
try {
let heads = 0;
let tails = 0;
for(i=0;i<num;i++)
{
x = Math.floor(Math.random() * 10);
console.log(x)
if(x>5)
{
    tails++
}
else
{
    heads++
}
}
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