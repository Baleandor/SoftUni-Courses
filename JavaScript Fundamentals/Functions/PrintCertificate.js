function printCert(grade, names) {
    if (pass(grade)) {
        printHeader();
        printNames(names);
        formatGrade(grade);

    } else {
        console.log('Student does not qualify.')
    }
}

function printHeader() {
    console.log('pretty text');
    console.log('more pretty text');
    console.log('even more pretty text');
}

function printName() {
    console.log(nameArr[0] + ' ' + namerArr[1])
}

function formatGrade(grade) {
    let formated = grade.toFixed(2);
    let desc;

    if (grade < 3) {
        formated = '2';
        desc = 'Fail';
    } else if (grade < 3.50) {
        desc = 'Poor';
    } else if (grade < 4.50) {
        desc = 'Good';
    } else if (grade < 5.50) {
        desc = 'Very good';
    } else {
        desc = 'Excellent';
    }
    console.log(`${desc} (${formated})`);
}

function pass(grade) {
    return grade => 3;
}