function cityInfo(city){

    let props = Object.keys(city);


    for (let prop of props){//Object.keys(city)
        console.log(`${prop} -> ${city[prop]}`);
    }
}