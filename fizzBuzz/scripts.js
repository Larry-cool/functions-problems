// Problem 5: Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples 
// of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


// Step 1 : define the function
function fizzBuzz(){
  
// Step 2 : write the For Loop
  for(let i = 1; i <= 100; i++){

// Step 3 : declare a variable with an empty string to store the word value
    let word = ""; 
// Step 4:to reduce conditionals, we can create the word & check 2 things instead of 3.

    if (i % 3 === 0){                           
      word += "Fizz";
    }
    if (i % 5 === 0){                    
      word += "Buzz";
    }

    console.log(i, word);  
  }
}


fizzBuzz();