function towns(input) {
    let city = {};

    
    let latitude = 0;
    let longitude = 0;

    while(input.length > 0){
       let currentCity = input.shift().split(' | ');
       latitude = Number(currentCity[1]).toFixed(2);
       longitude = Number(currentCity[2]).toFixed(2);
       city.town = currentCity[0];
       city.latitude = latitude;
       city.longitude = longitude;
       console.log(city);
    } 
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);