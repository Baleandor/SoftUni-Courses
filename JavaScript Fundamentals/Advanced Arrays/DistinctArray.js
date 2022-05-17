function duplicates(array) {
    
    let filteredArray = array.filter((number,index)=> {
        return array.indexOf(number) === index
    })
    console.log(filteredArray.join(' '));
}