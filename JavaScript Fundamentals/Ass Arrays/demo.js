let myAss = {
    alpha: 1,
    beta: 2,
    gama: 3,
    [myKey] : 10  //use ' ' for special symbols like -
};

let alpha = 5;
let myKey = 'fox-trot';


let assArr = {};
assArr['one'] = 1;
assArr['two'] = 2;
assArr['three'] = 3;

for(let key in assArr){
    console.log(key, assArr[key]);
}


delete myAss['beta'];  //erasing object elements erases BOTH key AND value beta:2 ;
delete myAss.beta;

let entries = Object.entries(myAss);

for (let [key,value] of Object.entries(myAss)){

    console.log(key, value);
}

let phonebook = { 'Tim' : '860468',
'Paul' : '548643'};

let entries = Object.entries(phonebook);
let firstentry = entries[0]; // entries[0] = Tim

let map = new Map();
map.set(1, 'one');
map.get(1); //returns value of key
map.has(1); // same as hasOwnProperty - returns true or false
map.delete(1); 
map.clear(); //erases whole ass map
map.entries//keys.values returns an iterable for a FOR OF cycle

for (let key of MediaKeyStatusMap.keys()){ //uses new iterable every tiem

}