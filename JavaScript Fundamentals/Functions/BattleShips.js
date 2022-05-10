function battleShips(arr) {
    //[*,*,*,-,-,-,-,*,*]}
    let shipOneLength = 0;
    let shipOnePosition = 0; //2

    let shipTwoLength = 0;
    let shipTwoPosition = 0; //9

    let isCollision = false;
    let hasCalculatedFirstShip = false;
    let hasCalculatedSecondShip = false;

    while (shipOnePosition < arr.length-1) {
        if (!hasCalculatedSecondShip) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === '*') {
                    if (!hasCalculatedFirstShip) {

                        shipOneLength++;
                        shipOnePosition = i;
                    } else {
                        shipTwoLength++;
                        shipTwoPosition = i;
                    }

                } else {
                    hasCalculatedFirstShip = true;
                }
            }
        }

        if (arr[shipOnePosition + 1] === '*' || arr[shipTwoPosition - shipTwoLength - 1] === '*') {
            isCollision = true;



        }
       
        hasCalculatedSecondShip = true;
        shipOnePosition++;
        arr[shipOnePosition - shipOneLength] = '-';
        arr[shipOnePosition] = '*';
        //console.log(shipOnePosition);

        if (!isCollision) {
            arr[shipTwoPosition - shipTwoLength] = '*'; //-1 =7
            arr[shipTwoPosition] = '-'; //9
            shipTwoPosition--; //8
        }else {
            arr.fill('-',shipOnePosition+1, arr.length);
        }
//Ще има сблъсък, но не движим десния.+



        console.log(arr);  
    }
    console.log(`Winner, winner, chicked dinner! Ship One has reached the finish line!`);
}
battleShips(['*', '*', '*', '-', '-', '-', '-', '-', '*', '*']);