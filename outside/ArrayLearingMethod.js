const { filterEvenNumber,
      covertoEvenNumber,
      sortNumberASC } = require('../utils/ArrayHelper');

let myNumberArray = [1, 2, 3, 4, 5];
let ComplexNumArry = [100,22,19];

ComplexNumArry.sort(sortNumberASC);


let evenNumbers = myNumberArray.filter(filterEvenNumber);

myNumberArray.map(covertoEvenNumber);

for (const value of myNumberArray) {
    console.log(value);
    console.log(myNumberArray);
}

console.log(ComplexNumArry);