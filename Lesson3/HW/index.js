"use strict";
/*
Створити програму для університету, яка відображатиме інформацію про студентів
та знаходитиме студента з найвищим середнім балом
*/
const students = [
    { name: 'Pavlo', course: 2, ModdleBal: 75 },
    { name: 'Ivan', course: 3, ModdleBal: 96 },
    { name: 'Anna', course: 3, ModdleBal: 95 }
];
console.log('Інформація про студентів ВУЗу');
let bestStudent = students[0];
for (let i of students) {
    if (bestStudent.ModdleBal < i.ModdleBal)
        bestStudent = i;
    console.log(`Студент "${i.name}" На ${i.course} курсі має середній бал: `, i.ModdleBal);
}
console.log(`Кращій студент ВУЗу: "${bestStudent.name}" На ${bestStudent.course} курсі. В нього середній бал: `, bestStudent.ModdleBal);
