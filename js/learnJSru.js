// let a;
// a = 1;
// b = '1'
// if (a == b) {
//     console.log('work');
// } else {
//     console.log('wrong');
// }

// Три під 'їзда 
// 1 = 1 - 20;
// 2 = 21 - 42;
// 3 = 43 - 62;

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// let a = 40;

// if (a >= 1 && a <= 20) {
//     console.log("Перший під'їзд");
// } else if (a >= 21 && a <= 42) {
//     console.log("Другий під'їзд");
// } else if (a >= 43 && a <= 62) {
//     console.log("Третій під'їзд");
// } else {
//     console.log("Такого під'їзда немає");
// }
// // ------------------------------------------
// window.onload = function () {

//     function randomInteger(min, max) {
//         // случайное число от min до (max+1)
//         let rand = min + Math.random() * (max + 1 - min);
//         return Math.floor(rand);
//     }
//     console.log(randomInteger(1, 10));
//     //виводимо в консоль генероване число

//     let userNum = document.querySelector('#user-num');

//     document.querySelector('#btn').onclick = checkNum;

//     function checkNum() {
//         let num = userNum.value;
//         num = parseInt(num);
//         console.log(num);
//         // isNaN('aaaa') -> true
//         // isNaN(4) -> false
//         ifff(isNaN(num)) {
//             alert('Введите корректное число');
//         } else {
//             if (num == rand) {
//                 alert('Вы угадали!!!!');
//                 fflocation.reload();
//             } else {
//                 ff alert('Пробуй еще!');
//             }
//         }
//     }
// }; ===
// === === === === === === === === === === === === === === ==

// let year = prompt('Скільки тобі років?', '');
// if (year >= 1 && year <= 10) {
//     alert('Привіт дитятко!');
// } else if (year >= 11 && year <= 17) {
//     alert('ТИ юнець!');
// } else if (year >= 18 && year <= 120) {
//     alert('ТИ повнолітній!');
// } else {
//     alert('НЕочікувана відповідь');
// }

// ===
// === === === === === === === === === === === === === === ==
// let ascer;
// let age = prompt('Вік', '');

// if (age >= 1 && age <= 18) {
//     ascer = true;
// } else if (age >= 19 && age <= 100) {
//     ascer = false;
// }

// alert(ascer); ===
// === === === === === === === === === === === === === === ==


// let s = prompt('Возраст', '');
// let mes = (s >= 1 && s <= 5) ? 'Малюк' :
//     (s >= 6 && s <= 18) ? 'Підліток' :
//     (s >= 8 && s <= 120) ? 'Понолітній' :
//     'Незвичний вік';
// alert(mes);
// document.location.reload(true); //перезагрузка сторінки

// ===
// === === === === === === === === === === === === === === ==
// let comp = prompt('Company', '');
// (comp == 'Net') ?
// alert('Вірно'): alert('Помилка');
// document.location.reload(true);


// let name = prompt("Whats the 'официальное название' JavaScript ?", ' ');
// if (name == 'ECMAScript') {
//     alert('Правильно!');
// } else {
//     alert("You don't know? “ECMAScript”!");
// }
// document.location.reload(true);

// ===
// === === === === === === === === === === === === === === ==


// let number = prompt('Введіть число', '');

// if (number > 1) {
//     alert('1');
// } else if (number <= -1) {
//     alert('-1');
// } else if (number == 0) {
//     alert('0');
// } else {
//     alert('Введіть тільки числа');
// }
// document.location.reload(true);

// ===
// === === === === === === === === === === === === === === ==
// Перепишите
// if с использованием условного оператора '?':

//     let result;

// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Много';
// }

// ===
// === === === === === === === === === === === === === === ==



// let login = prompt('Login', '');

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' : 'Нет такого логина';
// alert(message);
// document.location.reload(true);

// ===
// === === === === === === === === === === === === === === ==

// let hour = prompt('Введіть години', '');

// if (hour < 10 || hour > 18) {
//     alert('Офис закрыт.');
// } else {
//     alert('офис видкрито');
// }
// document.location.reload(true);

// ===
// === === === === === === === === === === === === === === ==


// let age = prompt('Write your age :', '');
// if (age >= 14 && age <= 90) {
//     alert('work');
// } else {
//     alert('not work');
// }
// document.location.reload(true);

// ===
// === === === === === === === === === === === === === === ==


// let age = prompt('Write your age :', '');
// if (!(age >= 14 && age <= 90)) { //! протилежне значення
//     alert('work');
// } else {
//     alert('not work');
// }
// document.location.reload(true);


// ===
// === === === === === === === === === === === === === === ==


// let go = prompt('Хто там?', '');

// if (go == "Я") {
//     let pass = prompt('Пароль', '');

//     if (pass == 'Я') {
//         alert('Здраствуйте');
//     } else if (pass == '' || pass == null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (go == '' || go == null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }

// document.location.reload(true);

// ===
// === === === === === === === === === === === === === === ==
// При помощи цикла
// for выведите чётные числа от 2 до 10.

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// ===
// === === === === === === === === === === === === === === ==

// Перепишите код, заменив цикл
// for на
// while, без изменения поведения цикла.

// for(let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }


// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// ===
// === === === === === === === === === === === === === === ==
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число– попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена(ESC).

// Предполагается, что посетитель вводит только числа.Предусматривать обработку нечисловых строк в этой задаче необязательно.

// let number = prompt('Введіть число більше 100', '');

// while (number >= 100) {
//     alert(`Число ${i}!`);
// }


// let n = prompt('Введіть число більше 100', '');
// while (n <= 99) {
//     alert(n);
// }

// let num;

// do {
//     num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);



// ===
// === === === === === === === === === === === === === === ==

// Напишите
// if..else, соответствующий следующему
// switch :

// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;

//     default:
//         alert('We hope that this page looks ok!');
// }


// -- -
// let browser;
// if (browser == 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' ||
//     browser == 'Firefox' ||
//     browser == 'Safari' ||
//     browser == 'Opera') {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }

// ===
// === === === === === === === === === === === === === === ==

// Перепишите код с использованием одной конструкции
// switch:

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//     alert('Вы ввели число 0');
// }

// if (number === 1) {
//     alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//     alert('Вы ввели число 2, а может и 3');
// }


// -- -
// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;

//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     default:
//         alert('Число не входит в диапазон');
//         break;
// }
// document.location.reload(true);

// ===
// === === === === === === === === === === === === === === ==

// function showMessage(from, text) {
//     let s = prompt("Ім'я", '');
//     console.log(s + ': ' + text);
// }
// showMessage("", 'Привет!');
// showMessage("", "Как дела?");

// ===
// === === === === === === === === === === === === === === ==
// function mes(from, text) {

//     from = '6' + from + '9';

//     alert(from + ': ' + text);
// }

// let from = prompt("Ім'я", "Аня");

// mes(from, "Привет");

// alert(from);

// ===
// === === === === === === === === === === === === === === ==

// function showMessage(from, text = "текст не добавлен") {
//     alert(from + ": " + text);
// }

// showMessage("Аня", "ntr");
// document.location.reload(true); ===
// === === === === === === === === === === === === === === ==


// function n(gg, text) {
//     if (text === undefined) {
//         text = ' текст не добавлен';
//     }

//     alert(gg + ': ' + text);
// }

// n('Ann');



// ===
// === === === === === === === === === === === === === === ==
// function security(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return confirm('А батьки дозволили');
//     }
// }
// let age = prompt('Скільки вам років', '18');
// if (security(age)) {
//     alert('Доступ надано');
// } else {
//     alert('Доступ заблоковано');
// }


// ===
// === === === === === === === === === === === === === === ==
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         // ...
//         return confirm('Родители разрешили?');
//     }
//     alert(age);
// }
// checkAge(15); ===
// === === === === === === === === === === === === === === ==
// Сделайте два варианта функции checkAge:

//     Используя оператор ?
//     Используя оператор ||

//     function checkAge(age) {
//         if (age > 18) {
//             return true;
//         } else {
//             return confirm('Родители разрешили?');
//         }
//     }
// // ---

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');

// }


// // ---

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');

// }


// ===
// === === === === === === === === === === === === === === ==

// Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.


// function less(a, b) {
//     if (a < b) {
//         return a
//     } else {
//         return b;
//     }
// }

// -- -

// function less(a, b) {
//     return (a < b) ? a : b;
// }


// console.log(less(2, 3));


// ===
// === === === === === === === === === === === === === === ==

// Напишите функцию pow(x, n), которая возвращает x в степени n.Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ... * 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x, n).


// P.S.В этой задаче функция обязана поддерживать только натуральные значения n, т.е.целые от 1 и выше.


// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;

// }

// let x = +prompt('Введите значение для x', '');
// let n = +prompt('Введите значение для возведения в степень', '');

// if (n < 1) {
//     alert(`Такая степень ${n} не поддерживается, Введите значение больше 1`, '');
//     for (;;) {
//         let n = +prompt('Введите значение для возведения в степень', '');
//         if (n > 1) {
//             alert(pow(x, n));
//         }
//         break;
//     }

// } else {
//     alert(pow(x, n));
// } ===
// === === === === === === === === === === === === === === =





// ===
// === === === === === === === === === === === === === === ==