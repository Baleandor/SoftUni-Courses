function addSub(num1, num2, num3){
    function add(num1, num2){
        return num1 + num2;
    }
    let sub = (add, num3) => add - num3;
    let result = add(num1, num2);
    let finalResult = sub(result, num3);
    console.log(finalResult);
}
addSub(23,6,10);