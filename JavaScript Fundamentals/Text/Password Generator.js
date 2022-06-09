function solve(input) {

    // let firstString = input[0];
    // let secondString = input[1];
    // let thirdString = input[2];
    [firstString, secondString, thirdString] = input; //destructured 1-2-3 from above
    let combinedString = firstString + secondString;

    let vowels = ["a", "e", "i", "o", "u"];

    let password = "";
    thirdString = thirdString.toLowerCase();

    let vowelIndex = 0;
    for (let i = 0; i < combinedString.length; i++) {
        if (vowels.includes(combinedString[i])) {
            let indexOfChar = vowelIndex % thirdString.length;
            vowelIndex++;
            let currentChar = thirdString.charAt(indexOfChar);
            password += currentChar.toUpperCase();
        } else {
            password += combinedString[i];
        }
    }

    console.log(`Your generated password is ${password.split('').reverse().join('')}`);

}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
])