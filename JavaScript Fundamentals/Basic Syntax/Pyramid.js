function pyramid(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 1;

    while (base >= 1) {
        if (base > 2) {
            if (steps % 5 == 0) {
                lapis += base * 4 - 4 * increment;
            } else {
                marble += base * 4 - 4 * increment;
            }
            steps++;
            stone += Math.pow(base - 2, 2) * increment;
        }else {
            gold += Math.pow(base, 2) * increment;
        }
        base -= 2;
    }
   
    console.log(`Stone Required: ${Math.ceil(stone)}\n Marble required: ${Math.ceil(marble)}\n Lapis Lazuli required: ${Math.ceil(lapis)}\n Gold Required: ${Math.ceil(gold)}\n Final height: ${Math.floor(steps * increment)}`);
}

pyramid(11, 1)