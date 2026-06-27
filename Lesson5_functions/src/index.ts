/*
Створити функцію для обчислення площі прямокутника. Функція приймає 2 аргументи: ширину і довжину.
*/

function calculateRectangleArea (length: number, width: number) : string {
    return `Rectangle area is: ${length*width} sm2`;
}

console.log(calculateRectangleArea(2, 5));

/*
Створити функцію для створення об'єкта користувача з вказаним ім'ям, віком та роллю
*/

enum Role {
    Admin = 'Адмін',
    User = 'Користувач',
    Guest = 'Гість'
}
type User = {
    name: string;
    age: number;
    role: Role;
}

function createUser(name: string, age: number, role: Role = Role.Guest): User {
    return {
        name,
        age,
        role
    };
}

const user1: User = createUser('Ivan', 21, Role.Admin);
const user2: User = createUser('Oleg', 20, Role.User);
const user3: User = createUser('Den', 21);

console.log(user1);
console.log(user2);
console.log(user3);

/*
Створити функцію для перевірки пароля на відповідність вимогам
1 аргумент - пароль
2 аргумент (опціональний) - мінімальна довжина
*/

function validatePassword(password: string, passLength?: number): boolean {

    if(passLength === undefined) passLength = 6;
    return (password.length > passLength); 
}

console.log(validatePassword('abcd'));
console.log(validatePassword('GoodPass', 5));

/*
Створити функцію яка приймає довільну кількість чисел і знаходить їх середнє-арифметичне
Треба використати рест оператор
*/

function middleMath(...numbers: Array<number>): number {
    if(numbers.length === 0) {
        console.log('Array is empty!');
        return 0;
    }
    let r = 0;
    // for(let i of numbers) {
    //     r+=i;
    // }
    r = numbers.reduce<number>((acc, curr) => {
        return acc + curr;
    }, 0);
    return r/numbers.length;
}

console.log(middleMath(10, 20, 30, 40, 50));