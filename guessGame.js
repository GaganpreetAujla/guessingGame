/*Let's create a guessing game

user enters a max number and then tries to guess a random generated nuumber between 1 to max*/


console.log("Let's start this beautiful guessing game");

const max = prompt("Please enter a max value you want to guess");
console.log(max);


const randomNum = Math.floor(Math.random()* max)+1;
console.log(randomNum);

let guess = prompt("Please enter any number for guessing let's see is this number is matching with our number or not");
console.log(guess);

while(true){
    if(guess == "quit"){
    console.log("user quit");
    break;
    }
    
    if(guess == randomNum){
        console.log("Congratulations you win this game" );
        break;
    }
    else{
        guess=prompt("your guess was wrong.please try again");
}


}
