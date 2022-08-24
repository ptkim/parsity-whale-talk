//step 1
var input = "coffee shop";


//step 2
let vowels = ['a', 'e', 'i', 'o', 'u'];
// console.log(vowels);

//step 3
var resultArray = [];

//step 4, 5, 6, 7, 8, 9, 10, 11, 12
for (let i = 0; i < input.length; i++) {
    // const inputArray = input[i];
    for (let j = 0; j < vowels.length; j++) {
        // const vowelsArray = vowels[j];
       if (input[i] === vowels[j]) {
        // console.log(vowels[j]);
        resultArray.push(vowels[j]);
        // console.log(resultArray);
       } if (input[i] === 'e') {
        resultArray.push(input[i]);
       } if (input[i] === 'u') {
        resultArray.push(input[i]);
       }
       console.log(resultArray);
    }
}

//step 13
var resultString = resultArray.join().toUpperCase();
console.log(resultString);
//step 14

//step 15
