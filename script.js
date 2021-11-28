// js файл
let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;
alert("Модальное окно - Hello World");
console.log('Консоль - Hello World1');

title = 'lesson02';
screens = "Простые, Сложные, Интерактивные";
screenPrice = 29;
rollback = 15;
fullPrice = 59999;
adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice
    + " рублей/долларов/гривен/юани \nСтоимость разработки сайта "
    + fullPrice + " рублей/долларов/гривен/юани");
console.log(fullPrice * (rollback / 100));
