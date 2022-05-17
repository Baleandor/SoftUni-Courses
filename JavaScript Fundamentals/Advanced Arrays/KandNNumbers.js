function solve (n, k){

    //create new  array with 1 inside

    //repeat n-times
    //take last k elements from new array
    //sum elements
    //add sum to new array

    //log

    let result = [1];

    for (let i = 0; i < n - 1; i++){
        let lastK = result.slice(-k);
        let sum = 0;
        for(let element of lastK){
            sum += element;
        }

        result.push(sum);
    }
    console.log(result.join(' '));
}