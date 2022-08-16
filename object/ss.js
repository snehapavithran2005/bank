///object- real time entity
//object store data as key value pair
//create object
var employee ={
    empid:1000,
    empname:'max',
    empDesg:'developer',
    empSalary:25000,
    empExp:2
}


//to get the value from object -use its key
//print employee name
console.log('employee name:',employee['empname']);


//method 2

//toncheck a key is present or not in the obj in operator
console.log('is empExp is present or not:','empExp' in employee);




////to add a new IDBCursorWithValue
employee['gender']='male'
employee.isVaccinated=true
employee.vaccine='covisheild'
//to print

//console.log(employee)
//to update value in an obj
employee.vaccin='covaxin'
///update
employee.empSalary=25000
employee.empSalary+=5000
console.log(employee)

//print key value pair one by one -in operator

for(let emp in employee)
{
    console.log(emp,':',employee[emp]);
}