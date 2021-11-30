// js файл
"use strict"

let title = 'lesson02';
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 29;
const rollback = 15;
let fullPrice = 59999;
let adaptive = true;

alert("Модальное окно - Hello World");
console.log('Консоль - Hello World1');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice
    + " рублей/долларов/гривен/юани \nСтоимость разработки сайта "
    + fullPrice + " рублей/долларов/гривен/юани");
console.log(fullPrice * (rollback / 100));

title = prompt('Как называется ваш проект?');
title = title == null ? "Проект1" : title;  //если будет введена "отмена"


screens = prompt('Какие типы экранов нужно разработать?');
screens = screens == null ? "На усмотрение разработчика" : screens;  //если будет введена "отмена"


screenPrice = +prompt('Сколько будет стоить данная работа?');                                            //переводить в число или не надо?
screenPrice = screenPrice == null ? 30000 : screenPrice;  //если будет введена "отмена"

adaptive = confirm('Нужен ли адаптив на сайте?');   //конфирм

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = screenPrice + servicePrice1 + servicePrice2;  //общая стоимость

let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));
console.log(servicePercentPrice);

if (fullPrice > 30000) console.log("Даем скидку в 10%");
if (fullPrice > 15000 && fullPrice <= 30000) console.log("Даем скидку в 5%");
if (fullPrice > 0 && fullPrice <= 15000) console.log("Скидка не предусмотрена");


if (fullPrice <= 0) console.log("Что то пошло не так");
