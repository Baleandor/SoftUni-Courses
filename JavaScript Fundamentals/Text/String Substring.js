function solve(word, input) {

    let newWord = word.toLowerCase();
    let newInput = input.toLowerCase().split(' ');

    for (let line of newInput) {

        if (line === newWord) {
            console.log(newWord);
            return;
        } 
        
    }
    console.log(`${newWord} not found!`);



}
solve('javascript',
    'JavaScript is the best programming language');