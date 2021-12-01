// js файл
"use strict"

const rollback = 15;

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let allServicePrices;
let fullPrice;
let servicePercentPrice;


let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

function getFullPrice(screenPr, allServicePr) {           //4урок функция вывода стоимости верстки и доп услуг
    return screenPr + allServicePr;
}

// const getTitle = function (Tit) {                        //4урок корректировка значения переменной title    КОСТЫЛИ  :'(
//     let str = "";
//     let a = true;
//     for (let char of Tit) {
//         if ((char == " ") || (a == false)) str = str + char.toLowerCase();
//         else {
//             str = str + char.toUpperCase();
//             console.log(char.toUpperCase());
//             a = false;
//         }
//     }
//     return str;
// }

const getTitle = function (Tit) {
    return Tit.trim()[0].toUpperCase() + Tit.trim().substr(1).toLowerCase();
}


const getAllServicePrices = function (service1, service2) {                  //4урок функция вывода доп услуг
    return service1 + service2
}

const getServicePercentPrices = function (fullPr, rollb) {                  //4урок функция вывода итоговой стоимости - процент отката
    return Math.ceil(fullPr - fullPr * (rollb / 100))
}

const showTypeOf = function (variable) {                         //4урок функция вывода типов 
    console.log(variable, typeof variable)
}

const getRollBackMessage = function (prise) {
    if (prise > 30000) return "Даем скидку в 10%";
    if (prise > 15000 && prise <= 30000) return "Даем скидку в 5%";
    if (prise > 0 && prise <= 15000) return "Скидка не предусмотрена";
    if (prise <= 0) return "Что то пошло не так";
}



allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);        //запись в переменную суммы доп услуг
fullPrice = getFullPrice(screenPrice, allServicePrices)                      //запись в переменную стоимости верстки и доп услуг
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);          //запись в переменную итоговой стоимости за вычетом процента отката
title = (getTitle(title));                                                    //вывод скорректированного значения 

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.split(", "))                                                 //вывод строки из переменной screens в виде массива
console.log(getRollBackMessage(fullPrice));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice
    + " долларов \nСтоимость разработки сайта "
    + fullPrice + " долларов");



