function divide(firstNumber, secondNumber){
    return Math.round(firstNumber/ secondNumber);
}

function isEvenNumber(number){
    return number % 2 === 0;
}


module.exports = {
    divide: divide,
    isEvenNumber: isEvenNumber
}