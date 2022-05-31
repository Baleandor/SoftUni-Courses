function solve(input) {

    let result = new Map();

    for (let line of input) {
        let tokens = line.split(' ');
        let student = tokens.shift();
        let grades = tokens.map(Number);

        if (result.has(student) == false) {
            result.set(student, []);
        }

        let existing = result.get(student);

        for (let grade of grades) {
            existing.push(grade);
        }

    }

    let sorted = Array.from(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [student, grade] of sorted) {
        let average = 0;
        for (let grade of grades){
            average += grade;
        }
        average /= grades.length;
        console.log(`${student}: ${average.toFixed(2)}`);
    }
}