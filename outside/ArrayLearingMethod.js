let myArray = [1,2,3,4,5];

let MyEvenNumber = myArray.filter(filterEvenNumber);

function filterEvenNumber(value,index,array){
    console.log("processing at index:",index);
    return value % 2 === 0;
}
for (const value of MyEvenNumber) {
    console.log(value);
    console.log(myArray);
}