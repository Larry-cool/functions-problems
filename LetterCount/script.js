/* Write a JavaScript function that accepts two arguments, a string and a letter and 
 the function will count the number of occurrences of the specified letter within the 
 string.
 */


// Step 1 : Write a Js function that accepts two arguments, a string and a letter.
function countLetter(str, letter){
  
  // Step 2 : declare a variable to count the letter.
  let letterCount = 0;
  
  
  //write a For loop.
  for(x = 0; x < str.length; x++) {
    if(str.charAt(x) == letter.toLowerCase()){
      letterCount += 1;
    }
      
  }
  return letterCount;
}


 console.log(countLetter("moonschool.com", "O"));