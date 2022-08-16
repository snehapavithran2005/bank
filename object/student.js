var student ={
    stdId:02,
    stdName:'sneha',
    stdMark:59,
    stdAge:18
}
console.log('student  name:',student.stdMark);

console.log('student  name:',student['stdName']);
console.log('is stdId is present or not:','stdId' in student);
student['class']=12
console.log(student)
student.isVaccinated=true
student.vaccine='covisheild'
student.stdAge=25000
student.stdAge+=5


console.log(student)