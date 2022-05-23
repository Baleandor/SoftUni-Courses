let person = {
    name: 'Peter',
    age: 20,
    sayHi: function () { // sayHi() { }  
        console.log('Hello!');
    }
};



let keys = Object.keys(person); //връща масив [name, age, sayhi]
for (let key of keys){
    console.log(key, person[key]); //принтира name, age, sayhi и след това стойностите им
}