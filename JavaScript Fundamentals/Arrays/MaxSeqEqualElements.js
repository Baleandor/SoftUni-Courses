function maxNumber(array) {
    let newArr = []
    for(let i = 0;i < array.length;i++){
        if(array[i] > array[i+1]){
        newArr.push(array[i])
    }else if(array[array.length - 1] ){
    
    }
    }
    newArr.push(array[array.length - 1])
    console.log(newArr.join(` `));
    }