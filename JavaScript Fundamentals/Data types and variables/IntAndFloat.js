function intFloat(num1, num2, num3){


let sum = num1 + num2 + num3;
let sumString = String(sum);
let type = 'Integer';

for (let i = 0; i < sumString.length; i++){
    if (sumString[i] == '.'){
        type = 'Float';
    }
}
console.log(`${sum} - ${type}`);
}
intFloat(1,2,3);