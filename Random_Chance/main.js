function slotMachine(quarters,playTo){
    let rand  = Math.random;
    let flr   = Math.floor;
    let chance,payout;

    while(quarters > 0){
        chance = flr(rand()*100+1);
        payout = flr(rand()*50+50+1);

        if(chance == 100){
            console.log("You've won "+payout+" quarters with "+quarters+" remaining quarters with a grand total of "+payout+quarters+" quarters.");
            payout += quarters;
            if(!playTo){return payout;}
        }
        quarters--;
    }
    return 0;
}

var slotRes = slotMachine(25);
console.log(slotRes);


// function slotMachine(){

//     let chance;
//         chance = Math.floor(Math.random()*100+1);
        
//         if(chance == 50){
//             console.log("You've won");           
//            }
//         else{console.log("You've lost");}
// }

// slotMachine();