

//1
let i = 0;

while(i <= 100) {
    console.log(i)
    i++;
}

// 2
let i2 = 0;

do {
    if (i2 === 0) {
        console.log("0 - це нуль")
        i2++;
        continue;
    }

    if (i2 % 2 === 0)
        console.log(i2 + " - це парне число")
    else
        console.log(i2 + " - це непарне число")

    i2++;
} while (i2 <= 10)

// 3
let numb = 10000;
let counter = 0;
let result = 0;

while (true) {
    counter++;

    if ((numb /= 2) < 50) {
        result = numb;
        break;
    }
}
console.log("Count is " + counter);
console.log("Result is " + result);

//4
let month = 0;

while (true) {
    month = parseInt(window.prompt("Введіть номер місяця "));

    if (month >= 1 && month <= 12) {
        break;
    }
    else window.alert("Будь-ласка, введіть дані правильно. Номер місяця повинен бути більше 0 та не більше 12")
}
let season = "";

if (month === 12 || month === 1 || month === 2)
    season = "Зимовий";
else if (month >= 3 && month <= 5)
    season = "Весняний";
else if (month >= 6 && month <= 8)
    season = "Літній";
else if (month >= 9 && month <= 11)
    season = "Осіній";

const month_names = ["Січень", "Лютий", "Березень", "квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень" ];
let month_name = month_names[month - 1];

window.alert(" Місяць " + month_name + " , це " + season + " сезон");

//5
let temperature_celsius = parseInt(window.prompt("Введіть температуру за Цельсієм "));
let temperature_fahrenheit = (9/5) * temperature_celsius + 32;
window.alert("Температура за Фаренгейтом " + temperature_fahrenheit);

//6
let day = 0;

while (true) {
    day = parseInt(window.prompt("Введіть номер дня "));

    if (day >= 1 && day <= 7) {
        break;
    }
    else window.alert("Будь-ласка, введіть дані правильно. Номер дня тижня повинен бути більше 0 та не більше 7");
}

const day_names = ["Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота", "Неділя"];
let day_name = day_names[day - 1];

window.alert("День має назву: " + day_name);