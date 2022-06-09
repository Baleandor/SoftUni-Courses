function solve(text) {

    let uniqueText = '';

    for (let i = 0; i < text.length; i++){
        let currentChar = text.charAt(i);
        let nextChar = text.charAt(i+1);
        if(currentChar != nextChar){
            uniqueText += currentChar;
        }
    }
    console.log(uniqueText);

}