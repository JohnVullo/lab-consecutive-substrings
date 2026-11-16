
//Funciton that takes string, turns it into array and splits into consecutive parts
function consecutiveSubstrings(string) {
    //Creates variable to turn string into array
    const wordArray = []

    //Creates variable to add word pairs to array
    const subArray = []

    //Creates variable for index
    let currentIndex = ""
    
    //For loop that turns string into array
    //The Big O time for this would be O(n)
    for(const char of string){
        //Adds index of string to variable
        currentIndex += char

        //Pushes variable to wordArray
        wordArray.push(char)
    }

    if (wordArray.length === 0) {
        //console.log("Empty word array: ", wordArray)

        //Returns empty string if length of wordArray is 0
        return []
    } else if(wordArray.length === 1) {
      //console.log(string)

      //Returns wordArray if length is 1 character
      return wordArray
    }
    
    //For loop that increments the anchor index
    //Because this is a nested loop, Big O time would be O(n^2)
    for(let i = 0; i < wordArray.length; i++){

        //Stores the anchor index content to variable
        currentIndex = wordArray[i]

        //Adds anchor index to subArray
        subArray.push(wordArray[i])

        //For loop for the inner loop
        for(let j = i + 1; j < wordArray.length; j++){

            //Stores the variable of itself and pivot index
            currentIndex += wordArray[j]

            //Pushes the stored variable into the subArray
            subArray.push(currentIndex)
        }
    }

    //console.log(subArray)

    return subArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


