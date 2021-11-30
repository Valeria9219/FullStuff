// js файл
"use strict"

let value = prompt("Ожидается значение");



const workWithString = function (arg) {
    if ((typeof arg) != 'string') return "Ошибка ввода данных. Ожидалась строка";
    arg.trim();
    if (arg.length > 30) return arg.substring(0, 30) + "...";
}


console.log(workWithString(value));