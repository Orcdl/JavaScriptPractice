const readline = require('readline-sync');


let isPlaying = true;
while(isPlaying){
    printGameMenu();
    let userOption = getUserOption();

    if(userOption == 0){
        isPlaying = false;
    } else if(userOption == 1){
         //Generate a random number and print out
         let randomNumber = Math.floor(Math.random()*10) + 1;
         console.log("The lucky number is", randomNumber);

    } else {
        console.log("Nhap lui roi Teo oi");
    }

}
console.log("Hen gap lai ban");

function printGameMenu(){
    console.log("---GAME MENU---");
    console.log("Create a ramdom number (1-10)");
    console.log("0. Exit");
}

function getUserOption(){
    return readline.question('Please select an option');
}
