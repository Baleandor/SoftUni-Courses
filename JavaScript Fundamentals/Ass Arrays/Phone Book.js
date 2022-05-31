function solve(input){

    let result = {};

    for (let line of input){
        let tokens = line.split(' ');
        let name = tokens[0];
        let phoneNum = tokens[1];

        result[name] = phoneNum;
    }

    for (let name in result){
        console.log(`${name} -> ${result[name]}`);
    }

}