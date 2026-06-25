"use strict";
// console.group("Hello world!");
// let firstName: string = 'Ivan';
// let lastName: string = 'Borch';
// console.log(`${firstName} ${lastName}`);
// const pi: number = 3.14;
// for(let i = 0; i < 10; i++) {
//     if(i % 2 === 0) console.log(`Number is: ${i}`);
// }
// console.log(this.document);
const form = document.querySelector('#form'); // as - це перевірка чи відповідає
// змінна потрібному типу і != null.
const stepsList = document.querySelector('#factorial-steps'); // Те ж саме. типи змінних беруться
// на сайті "mdn web docs" в роздылы web-api interfaces
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупиняє перезавантаження сторінки
    stepsList.textContent = '';
    //Отримання введеного числа
    const inputNumber = document.querySelector('#number');
    //console.dir(inputNumber); // Виводить в консоль змінну в об'єктномуц вигляді
    const userNumber = Number(inputNumber.value); // Приводимо value до типу Number
    let factorial = 1;
    for (let i = userNumber; i > 1; --i) {
        factorial *= i;
        let ListElenent = document.createElement('li'); // Створення нового елементу списку
        ListElenent.textContent = `${factorial}`; // Зміна тексту в новому елементі списку
        stepsList.appendChild(ListElenent); // Додання нового елементу в список
    }
});
