"use strict"

let question = confirm("Хотите сыграть в игру - 'Угадай число'?");
let numb;
let attempt = 10;

const isNumber = function (num1) {                               //проверка на число
    return !isNaN(parseFloat(num1)) && (isFinite(num1));
}

const number = function getRandomInRange() {
    return Math.floor(Math.random() * (100)) + 1;
}

const check = function (num, att) {
    let restart;
    let answer;

    answer = prompt("Угадай число от 1 до 100");

    if (answer == null) return alert("Игра окончена");

    if (!isNumber(answer)) alert("Введи число");
    else answer = +answer;

    if (isNumber(answer) && answer > num) { att--; alert("Загаданное число меньше, осталось попыток " + att); }
    else if (isNumber(answer) && answer < num) { att--; alert("Загаданное число больше, осталось попыток " + att); }

    if (att == 0) {
        restart = confirm("Попытки закончились, хотите сыграть еще?");
        if (restart == true) { check(num, attempt); return }
        else if (restart == false) return alert("Игра окончена");
    }

    if (num == answer) {
        restart = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
        if (restart == true) { check(num, attempt); return }
        else return alert("Игра окончена");
    }

    check(num, att);
}

if (question == true) {
    numb = number();
    alert(numb);
    check(numb, attempt);
}
else alert("Очень жаль");


