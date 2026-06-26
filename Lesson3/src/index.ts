/*
Знайти найбільшек число в масиві
*/

const arr: number[] = [1, 3, 44, 12, 8, -2];
let max = arr[0];

for(let i = 0; i < arr.length; ++i) {
    if(max < arr[i]) max = arr[i];
}
console.log('The biggest num is: ', max);

/*
Знайти середнє значення в масиві чисел
*/

const nums: number[] = [10, 20, 30];
let sum: number = 0;

for(let n of nums) {
    sum += n;
}
console.log('Middle num of array is: ', sum/nums.length);

/*
Знайти перше від'ємне число у масиві
*/

const arr2: number[] = [10, -20, 30, 40, -50];
let firstNegative: number | undefined;

for(let n of arr2) {
    if(n < 0) {
        firstNegative = n;
        break;
    }
}
console.log('First negative num of array is: ', firstNegative);

/*
Обчислити вартість покупки з урахуванням знижки
*/

type Item = {
    name: string;
    price: number;
}
const item: Item = {name: 'Short', price: 300};
const discount: number = 10; // 10%
let discountAmount: number = (item.price / 100) * discount;
let totalCost: number = item.price - discountAmount;

console.log('Total cost with discount is: ', totalCost);

/*
Створити програму для обчислення оплати праці працівників на основі годинної ставки та кількості годин праці
*/
type Employer = {
    name: string;
    HourlyRate: number;
}

type PayCheck = {
    name: string;
    amount: number;
}

const John: Employer = {name: 'Joht', HourlyRate: 30};
const JohnAmount: number = John.HourlyRate * 40;

const invoice: PayCheck = {name: John.name, amount: JohnAmount};
console.log(`${John.name}'s amount is: `, invoice.amount);

/*
Створити програму книжкового магазину яка буде відображати інформацію про наявні книги
*/
type Book = {
    title: string;
    author: string;
    price: number;
}

const library: Book[] = [
    {title: 'Листи крутеня', author: 'Клайв Льюіс', price: 30},
    {title: 'Діалог з православьям', author: 'Мурзін Андрій', price: 15},
    {title: 'Думай і багатій', author: 'Наполеон Хіл', price: 20}
];

for(let i of library) {
    console.log(`Книга "${i.title}" від автора ${i.author} коштує: `, i.price);
}
