


const statement = "This is going to be a beautiful day";

function findLongestWord(statement){
//Step 1. Split the string into an array of strings
  const splitWords = statement.split(" ");
  
// Step 2. Initiate a variable that will hold the length of the longest word.
  let longestWord = 0;
  
// Step 3. Create the FOR loop.
  for(let i = 0; i < splitWords.length; i++) {
     console.log(splitWords[i].length)
  
  if(splitWords[i].length > longestWord){
    longestWord = splitWords[i];
      
 
  
     }
   }
  //Step 4. Return the longest word
  return longestWord;
}