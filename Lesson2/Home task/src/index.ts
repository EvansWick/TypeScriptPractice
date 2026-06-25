
const Myform: HTMLFormElement = document.querySelector('#form') as HTMLFormElement;



let result = document.querySelector('#final-Result') as HTMLParagraphElement;

Myform.addEventListener('submit', (event) => {
    event.preventDefault(); // Зупиняє перезавантаження сторінки
    result.textContent = ''; // Очистка результату

    const age = document.querySelector('#userAge') as HTMLInputElement;
    const userName = document.querySelector('#userName') as HTMLInputElement;
    const stringName: string = String(userName.value);
    if(Number(age.value) >= 25) {
        result.textContent = `${stringName}, Ваші облікові документи!`;
    } else {
        result.textContent = `${stringName}, Ти ще замалий для лав ЗСУ!`;
    }
})

