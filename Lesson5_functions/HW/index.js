"use strict";
/*
Створити програму для обчислення вартості замовлення в інтернет-магазині

1) Створити тип даних для представлення товару з назвою та ціною
2) Написати функцію для обчислення загальної вартості замовлення, яка приймає масив товарів та повертає загальну суму
3) перевірити що масив товарів не порожній, а ціна кожного товару > 0.
*/
function totalPrice(...items) {
    if (items.length === 0) {
        console.log('Busket is empty');
        return 0;
    }
    let cost = 0;
    for (let i of items) {
        if (i.price > 0)
            cost += i.price;
    }
    return cost;
}
const ware1 = {
    name: 'Car',
    price: 30000
};
const ware2 = {
    name: 'Motorcycle',
    price: 10000
};
const ware3 = {
    name: 'Helicopter',
    price: 100000
};
console.log(totalPrice(ware1, ware2, ware3));
