// js файл
"use strict"

let arr = ["1256", "236636", "899", "785", "0333", "46985", "5775263"];

for (let i = 0; i < 7; i++) {

    if ((arr[i].slice(0, 1) == "2") || (arr[i].slice(0, 1) == "4")) console.log(arr[i])

}

let number;

for (let i = 1; i <= 100; i++) {
    number = 0;
    for (let j = 2; j <= 9; j++) {

        if (i == j) break;

        if (i % j == 0) {
            number++;
            break;
        }
    }
    if (number == 0) console.log(i);
}