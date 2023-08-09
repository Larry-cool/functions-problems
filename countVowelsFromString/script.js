//Write a JavaScript function that accepts a string as a 
//parameter and counts the number of vowels within the string.

//Step 1 : define a function that takes in a parameter (a string).

function getVowels(str) {
//step 2 : define a variable that's equal to an array of vowels.

 const arrayOfVowels = ["a", "e", "i", "o", "u"];

 // step 3 :Initiate a new variable to hold the number of vowels.

 let numberOfvowels = 0;

 // step 4 :lowercase the words so they're the same case as vowels array,
 //then split into array of each letter

 const arrayOfLetters = str.toLowerCase().split("");

 // step 5 : Write a For loop.

 for (let i = 0; i < arrayOfLetters.length; i++) {
     if (arrayOfVowels.includes(arrayOfLetters[i])) {
        numberOfvowels +=1
     }
 }
  return numberOfvowels;
}

console.log(getVowels("This is getting interesting"));