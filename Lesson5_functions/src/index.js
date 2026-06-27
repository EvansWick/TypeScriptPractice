"use strict";
/*
Створити функцію для обчислення площі прямокутника. Функція приймає 2 аргументи: ширину і довжину.
*/
function calculateRectangleArea(length, width) {
    return `Rectangle area is: ${length * width} sm2`;
}
console.log(calculateRectangleArea(2, 5));
/*
Створити функцію для створення об'єкта користувача з вказаним ім'ям, віком та роллю
*/
var Role;
(function (Role) {
    Role["Admin"] = "\u0410\u0434\u043C\u0456\u043D";
    Role["User"] = "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447";
    Role["Guest"] = "\u0413\u0456\u0441\u0442\u044C";
})(Role || (Role = {}));
function createUser(name, age, role = Role.Guest) {
    return {
        name,
        age,
        role
    };
}
const user1 = createUser('Ivan', 21, Role.Admin);
const user2 = createUser('Oleg', 20, Role.User);
const user3 = createUser('Den', 21);
console.log(user1);
console.log(user2);
console.log(user3);
/*
Створити функцію для перевірки пароля на відповідність вимогам
1 аргумент - пароль
2 аргумент (опціональний) - мінімальна довжина
*/
function validatePassword(password, passLength) {
    if (passLength === undefined)
        passLength = 6;
    return (password.length > passLength);
}
console.log(validatePassword('abcd'));
console.log(validatePassword('GoodPass', 5));
/*
Створити функцію яка приймає довільну кількість чисел і знаходить їх середнє-арифметичне
Треба використати рест оператор
*/
function middleMath(...numbers) {
    if (numbers.length === 0) {
        console.log('Array is empty!');
        return 0;
    }
    let r = 0;
    // for(let i of numbers) {
    //     r+=i;
    // }
    r = numbers.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return r / numbers.length;
}
console.log(middleMath(10, 20, 30, 40, 50));
