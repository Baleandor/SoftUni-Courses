String.lastIndexOf("o") //searches last itteration of given symbol

String.substring(startIndex, endIndex) //starting and ending index, same as .SLICE
let text = 'Za WARUDO';
console.log(text.substring(3,6));

//.slice(3,-7) slice counts in reverse with negatives

String.replace(search, replacement) //replaces SEARCH with REPLACEMENT, use /.bg/g to replace ALL iterations

String.repeat(x) //repeats the .str X number of times

String.padStart(x, 'y') //String.padEnd() literally PADS a string to X number with 'Y' symbols