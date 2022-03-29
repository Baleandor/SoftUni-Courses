function reversedChars(char1, char2, char3) {

    //let reverseChars = allChars.split('').reverse();

    let allChars = char1 + char2 + char3;
    let reverseChars = "";

    for(i=allChars.length-1; i >= 0; i--){
        reverseChars += allChars[i] + " ";
    }


    console.log(reverseChars);
}
reversedChars('A', 'B', 'C');