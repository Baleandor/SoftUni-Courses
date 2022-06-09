function solve(text, word) {
    // (text,word) => text.split(' ').filter(x => x === word).length


    let counter = 0;
    let newText = text.split(' ');

    for (let element of newText) {
        if (element === word) {
            counter++
        }
    }
    console.log(counter);
}
word = ` ${word} `;
let text = ` ${text} `;
let counter = 0;
let index = 0;
while (text.indexOf(word, index) != -1) {
    count++
    index = text.indexOf(word, index) + 1;
}