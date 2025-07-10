const input = 'This is whale speak';
const lowerInput = input.toLowerCase()
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];


// Loop through each letter in input variable
// Adds the vowels to resultArray
// Adds an extra e and u to resultArray
for (let i = 0; i < input.length; i++) {
  if (lowerInput[i] === 'e' || lowerInput[i] === 'u') {
      resultArray.push(lowerInput[i]);
    }
  for (let j = 0; j < vowels.length; j++) {
    if (lowerInput[i] === vowels[j]) {
      resultArray.push(vowels[j]);
    }
  }
}

//Joins and uppercases the string from resultArray
const resultString = resultArray.join("").toUpperCase(); 

console.log(resultString);
