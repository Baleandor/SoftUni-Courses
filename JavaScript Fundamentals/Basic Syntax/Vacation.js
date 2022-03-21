function vacation(people, groupType, day){

let studentsFridayPrice = 8.45;
let businessFridayPrice = 10.90;
let regularFridayPrice = 15;

let studentsSaturdayPrice = 9.80;
let businesSaturdayPrice = 15.60;
let regularSaturdayPrice = 20;

let studentsSundayPrice = 10.46;
let businessSundayPrice = 16;
let regularSundayPrice = 22.50;

let studentsDiscountPercentage = 15;
let businessDiscout = 10;
let regularDiscountPercentage = 5;

let totalPrice = 0;

if (groupType === 'Business' && people >= 100){
    people -= businessDiscout;
}
if(groupType === 'Students' && day === 'Friday'){
    totalPrice += people * studentsFridayPrice;
}
if(groupType === 'Students' && day === 'Saturday'){
    totalPrice += people * studentsSaturdayPrice;
}
if(groupType === 'Students' && day === 'Sunday'){
    totalPrice += people * studentsSundayPrice;
}

if(groupType === 'Regular' && day === 'Friday'){
    totalPrice += people * regularFridayPrice;
}
if(groupType === 'Regular' && day === 'Saturday'){
    totalPrice += people * regularSaturdayPrice;
}
if(groupType === 'Regular' && day === 'Sunday'){
    totalPrice += people * regularSundayPrice;
}

if(groupType === 'Business' && day === 'Friday'){
    totalPrice += people * businessFridayPrice;
}
if(groupType === 'Business' && day === 'Saturday'){
    totalPrice += people * businesSaturdayPrice;
}
if(groupType === 'Business' && day === 'Sunday'){
    totalPrice += people * businessSundayPrice;
}

if(groupType === 'Students' && people >= 30){
    totalPrice -= (studentsDiscountPercentage / 100) * totalPrice;
}else if (groupType === 'Regular' && people >= 10 && people <=20){
    totalPrice -= (regularDiscountPercentage / 100) * totalPrice;
}

console.log(`Total price: ${totalPrice.toFixed(2)}`)





}
vacation(30, "Students", "Sunday")