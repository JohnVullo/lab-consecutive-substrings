function consecutiveSubstrings(string) {
    const wordArray = []
    const subArray = []
    let currentIndex = ""
    
    for(const char of string){
        currentIndex += char
        wordArray.push(char)
    }

    if (wordArray.length === 0) {
        console.log("Empty word array: ", wordArray)
        return []
    } else if(wordArray.length === 1) {
        console.log(string)
        return wordArray
    }
    
    for(let i = 0; i < wordArray.length; i++){
        currentIndex = wordArray[i]
        subArray.push(wordArray[i])
        for(let j = i + 1; j < wordArray.length; j++){
            currentIndex = currentIndex + wordArray[j]
            subArray.push(currentIndex)
        }
    }

    console.log(subArray)

    return subArray
}

consecutiveSubstrings("abcdefghijklmnopqrstuvwxyz")

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


