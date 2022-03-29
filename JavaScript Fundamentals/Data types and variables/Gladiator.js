function gladiator(losses, helmet, sword, shield, armor) {
    //ever 2nd loss helmet broke
    //every 3rd loss sword broke
    //if sword and helmet broken so is shield
    //every 2nd shield break armor breaks

    let breakCounter = 0;

    let helmetCost = 0;
    let swordCost = 0;
    let shieldCost = 0;
    let armorCost = 0;

    for (i = 1; i <= losses; i++) {
        breakCounter++;
        if (breakCounter % 2 == 0) {
            helmetCost += helmet;
        }
        if (breakCounter % 3 == 0) {
            swordCost += sword;
        }
        if (breakCounter % 6 == 0) {
            shieldCost += shield;
        }
        if (breakCounter % 12 == 0) {
            armorCost += armor;
        }

    }
    let totalCost = (helmetCost + swordCost + shieldCost + armorCost).toFixed(2);
    console.log(`Gladiator expenses: ${totalCost} aureus`);

}
gladiator(7, 2, 3, 4, 5);