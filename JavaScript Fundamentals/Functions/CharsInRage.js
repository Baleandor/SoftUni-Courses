function charactersInRange(char1, char2) {
    // console.log(char1.charCodeAt(0), char2.charCodeAt(0));
    let startingChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endingChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let finalChar = [];
    for (let i = startingChar + 1; i < endingChar; i++) {
        finalChar.push(String.fromCharCode(i));
    }
    console.log(finalChar.join(" "));


}
charactersInRange("a", "d");