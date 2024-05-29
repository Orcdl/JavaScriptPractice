function filterEvenNumber(value,index,array){
    return value % 2 === 0;
}

function covertoEvenNumber(value,index,array){
    if(value % 2 !==0) {
      return value +1
    }
  }

function sortNumberASC(firstNum, secondNum ){
    return firstNum - secondNum;
}

module.exports = {
    filterEvenNumber: filterEvenNumber,
    covertoEvenNumber: covertoEvenNumber,
    sortNumberASC: sortNumberASC,
}