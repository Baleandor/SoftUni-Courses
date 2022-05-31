function solve(input) {
    let result = {};

    let [wordOne, wordTwo] = input.shift().split(' ');


    let wordOneCounter = 0;
    let wordTwoCounter = 0;

    for (let line of input) {
        if (line == wordOne) {
            wordOneCounter++;
        } else if (line == wordTwo) {
            wordTwoCounter++;
        }
        result[wordOne] = wordOneCounter;
        result[wordTwo] = wordTwoCounter;
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => { //((a, b) => a[0].localeCompare(b[0])); sorting by KEY, if a[1] - sorting by VALUE
        let nameA = a[1];
        let nameB = b[1];

        return nameB - nameA; //a to z, if nameB comapre nameA - Z to A
    });

    for (let [key, value] of sorted) {

        console.log(key, '-', value);
    }
}

function wordCount(input) {

    let words = input.shift().split(' ');

    let result = {};

    for (let word of words) {
        result[word] = 0;
    }

    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(word, '-', count);
    }
}


solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);