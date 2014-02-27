function userChoices(){
        
    var userChoice = prompt("Do you choose rock, paper or scissors?");
    return userChoise;
}

var computerChoiceRandom = function(){
    
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
        console.log("Computer: " + computerChoice);
    } 
    return computerChoice;
}

var compare = function (choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!"  
        var ask = prompt("do you wanna do again?");
        if(ask === "yes"){
            compare(userChoices, computerChoiceRandom);
        }
    }else if(choice1 === "scissors"){
        
        return undefined;/* 
        if(choice2 === "rock"){
            return "rock wins"
        }else{
            return "scissor wins"
        }*/
        
    }else if(choice1 === "rock"){
        return undefined;/*
        if(choice2 === "paper"){
            return "paper wins"
        }else{
            return "rock wins"
        }*/
        
    }else if(choice1 === "paper"){
        return undefined;
        /*
        if(choice2 === "scissors"){
            return "scissors wins"
        }else{
            return "paper wins"
        }*/
        
    }
}

compare(userChoices, computerChoiceRandom);