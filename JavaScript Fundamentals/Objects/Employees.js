function employees(input){

    let employeeList = {};
    for (let employee of input){
        employeeList.name = employee;
        employeeList.personalNumber = employee.length;
        console.log(`Name: ${employeeList.name} -- Personal Number: ${employeeList.personalNumber}`);
    }

    //OG solving 

    employeeName = [];
    employeeNumber = 0;

    while (input.length > 0){
        employeeName = input.shift();
        employeeNumber = employeeName.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${employeeNumber}`)
    }

}
employees(['Silas Butler', 
'Adnaan Buckley',
'Juan Peterson',
'Brandon Herrera']);