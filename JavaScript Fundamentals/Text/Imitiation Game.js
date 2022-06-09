function solve(input) {
    let commands = {
        Move,
        Insert,
        ChangeAll

    };
    //take encoded message
    let message = input.shift();
    //parse every line
    while (input[0] != 'Decode') {
        let line = input.shift();
    }
    //parse line
    let tokens = line.split('|');
    //find and execute command
    let command = tokens[0];
    tokens[2]; // objects don't care if [2] is undefined, they'll ignore and not print it
    message = commands[command](message, tokens[1], tokens[2]);
    //print
    console.log(`The decrypted message is: ${message}`);
    
    //SUBSTRING TURNS A STRING INTO A NUMBER IF IT'S A NUMBER




    function Move(str, num) {
        //take first N letters
        let start = str.substring(0, num);
        //remove from start and place at end
        let end = str.substring(num);

        //return end + start
        return end + start;
    }

    function Insert(str, index, text) {
        //take first half
        let start = str.substring(0, index);
        //take second half
        let end = str.substring(index);
        //return first + text + second
        return start + text + end;
    }

    function ChangeAll(str, match, text) {
        //tokenize by .split match and .join text
        let tokens = str.split(match);
        return tokens.join(text);

    }
}



