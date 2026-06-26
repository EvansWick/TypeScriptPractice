"use strict";
/*
Знайти найбільшек число в масиві
*/
const arr = [1, 3, 44, 12, 8, -2];
let max = arr[0];
for (let i = 0; i < arr.length; ++i) {
    if (max < arr[i])
        max = arr[i];
}
console.log('The biggest num is: ', max);
/*
Знайти середнє значення в масиві чисел
*/
const nums = [10, 20, 30];
let sum = 0;
for (let n of nums) {
    sum += n;
}
console.log('Middle num of array is: ', sum / nums.length);
/*
Знайти перше від'ємне число у масиві
*/
const arr2 = [10, -20, 30, 40, -50];
let firstNegative;
for (let n of arr2) {
    if (n < 0) {
        firstNegative = n;
        break;
    }
}
console.log('First negative num of array is: ', firstNegative);
const item = { name: 'Short', price: 300 };
const discount = 10; // 10%
let discountAmount = (item.price / 100) * discount;
let totalCost = item.price - discountAmount;
console.log('Total cost with discount is: ', totalCost);
const John = { name: 'Joht', HourlyRate: 30 };
const JohnAmount = John.HourlyRate * 40;
const invoice = { name: John.name, amount: JohnAmount };
console.log(`${John.name}'s amount is: `, invoice.amount);
const library = [
    { title: 'Листи крутеня', author: 'Клайв Льюіс', price: 30 },
    { title: 'Діалог з православьям', author: 'Мурзін Андрій', price: 15 },
    { title: 'Думай і багатій', author: 'Наполеон Хіл', price: 20 }
];
for (let i of library) {
    console.log(`Книга "${i.title}" від автора ${i.author} коштує: `, i.price);
}
