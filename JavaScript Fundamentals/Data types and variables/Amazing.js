function amazing(num){
let result = 0;
let numString = String(num);

for(let i = 0; i < numString.length; i++){
result += Number(numString[i]);
}

let resultAsString = String(result);
let special = false;
for (let i = 0; i < resultAsString.length; i++){
    if(resultAsString[i] == '9'){
        special = true;
    }
}

console.log(`${num} Amazing? ${special ? `True` : `False`}`);
    
}