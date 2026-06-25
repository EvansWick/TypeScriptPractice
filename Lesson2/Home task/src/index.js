"use strict";
const Myform = document.querySelector('#form');
let result = document.querySelector('#final-Result');
Myform.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупиняє перезавантаження сторінки
    result.textContent = ''; // Очистка результату
    const age = document.querySelector('#userAge');
    const userName = document.querySelector('#userName');
    const stringName = String(userName.value);
    if (Number(age.value) >= 25) {
        result.textContent = `${stringName}, Ваші облікові документи!`;
    }
    else {
        result.textContent = `${stringName}, Ти ще замалий для лав ЗСУ!`;
    }
});
