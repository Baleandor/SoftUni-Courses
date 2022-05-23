function convertToObject(objAsString){

let obj = JSON.parse(objAsString);

for (prop of Object.keys(obj)){
    console.log(`${prop}: ${obj[prop]}`);
}
}