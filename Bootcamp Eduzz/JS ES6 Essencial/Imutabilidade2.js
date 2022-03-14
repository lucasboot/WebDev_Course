const students =  [
{
    name: 'Grace',
    grade: 6

},
{
    name: 'Jennifer',
    grade: 10
},
{
    name: 'Paul',
    grade: 4
}
];
function getApprovedStudents(studentsList){
    return studentsList.filter(student => student.grade >=7);
}
console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

console.log('Lista de alunos: ');
console.log(students);