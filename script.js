// js файл
"use strict"

let lang = prompt("Введите значение 'ru' или 'en'");

if (lang == 'ru') console.log("понедельник вторник среда четверг пятница суббота воскресенье")
else if (lang == 'en') console.log("monday tuesday wednesday thursday friday saturday sunday")
else console.log("Введено некорректное значение");


switch (lang) {
    case 'ru':
        console.log("понедельник вторник среда четверг пятница суббота воскресенье")
        break
    case 'en':
        console.log("monday tuesday wednesday thursday friday saturday sunday")
        break
    default:
        console.log("Введено некорректное значение");
}


const arr = new Map([
    ['ru', 'понедельник вторник среда четверг пятница суббота воскресенье'],
    ['en', 'monday tuesday wednesday thursday friday saturday sunday']
])

console.log(arr.get(lang));

let namePerson = prompt("Введите Ваше имя");

namePerson == "Артем" ? console.log("директор") : namePerson == "Александр" ? console.log("Преподаватель") : console.log("Студент")

