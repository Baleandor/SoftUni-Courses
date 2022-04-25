function equalSums(arr){
    let suml =0;
    let sumr =0;
    let currentIndex = "no";

    for(let i = 0; i <arr.length; i++){
        sumr = 0;
        if ( i == 0){
            suml = 0
        }else{
            suml +=Number(arr[i-1]);
        }
        for ( let j = i+1; j< arr.length; j++){
            sumr+=Number(arr[j]);
        }
        if (suml == sumr){
            currentIndex = i;
        }
    }
    console.log(currentIndex);

}