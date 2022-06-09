function solve(input) {

    let result = [];
    let currWord = input[0];

    for (let i = 1; i < input.length; i++) {
        if (input[i].toUpperCase() !== input[i]) {

            currWord = currWord.concat(input[i]);
        } else {
            result.push(currWord);
            currWord = input[i];
        }

    }
    result.push(currWord);
    console.log(result.join(', '));




}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');