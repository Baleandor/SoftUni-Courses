function solve(text, word) {

    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);



}

function solve(text, word){

    let tokens = text.split(word);
    console.log(tokens.join('*'.repeat(word.length)));

}