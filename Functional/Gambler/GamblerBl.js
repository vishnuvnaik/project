/**
* @description : Gambling simulator
* @param {Gambler}
* @return input the stake goal and bet
*/
gambling=(stake,goal,bet,n) =>
{
    try {
        let win = 0;
        let loss= 0;
    while( (stake>0) && (goal!=stake) && (n>0) )
        {
            if (bet > stake)
            {
                console.log('bet must be lesser than stake try again');
                continue;
            }
            x = Math.floor(Math.random() * 10)
            if(x>5)
            {
                console.log("you won the bet");
                stake = stake + bet;
                win++;
            }
            else
            {
                console.log("you loss the bet");
                stake = stake-bet;
                loss++;
            }
        
        console.log("stake amount = ",stake);    

        } 
            if (stake > goal )
            {
                console.log(" you have reached the goal :");
                
            }  
            else 
             {   console.log("you didnt reached the goal");
        }
    console.log("number of wins = ",win);
    console.log("number of loss = ",loss);   
    winp =  (win)/(win+loss);
    lossp = (loss)/(win+loss);
    console.log("win percentage = ",winp * 100);
    console.log("loss percenetage = ",lossp * 100);  
    }


     catch (error) 
    {
        console.log(error)
    }


}
module.exports = {gambling}

