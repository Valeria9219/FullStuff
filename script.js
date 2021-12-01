"use strict";

const rollback = 15;

let title;
let screens;
let screenPrice;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && (isFinite(num));
}

const asking = function () {
    title = prompt('Как называется ваш проект?', "Калькулятор верстки");
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, сложные");

    screenPrice = prompt('Сколько будет стоить данная работа?');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice));                                                    //вывод строка!!!!!!!!
    screenPrice = +screenPrice;
    adaptive = confirm('Нужен ли адаптив на сайте?');

}

const getAllServicePrices = function () {                   //4урок функция вывода доп услуг
    let sum = 0;
    let question;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        }
        else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        do {
            question = prompt('Сколько будет стоить данная работа?');
        } while (!isNumber(question));
        sum += +question;
    }
    return sum;
}

function getFullPrice(screenPr, allServicePr) {           //4урок функция вывода стоимости верстки и доп услуг
    return screenPr + allServicePr;
}

const getTitle = function (Tit) {
    return Tit.trim()[0].toUpperCase() + Tit.trim().substr(1).toLowerCase();
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

asking();
allServicePrices = getAllServicePrices();        //запись в переменную суммы доп услуг
fullPrice = getFullPrice(screenPrice, allServicePrices)                      //запись в переменную стоимости верстки и доп услуг
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);          //запись в переменную итоговой стоимости за вычетом процента отката
title = (getTitle(title));                                                    //вывод скорректированного значения 

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
showTypeOf(screenPrice);

console.log("allServicePrices", allServicePrices);

console.log(screens.split(", "))                                                 //вывод строки из переменной screens в виде массива
console.log(getRollBackMessage(fullPrice));
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice
    + " долларов \nСтоимость разработки сайта "
    + fullPrice + " долларов");



