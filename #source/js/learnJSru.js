// let a;
// a = 1;
// b = '1'
// if (a == b) {
//     console.log('work');
// } else {
//     console.log('wrong');
// }

// Три під'їзда 
// 1 = 1 - 20;
// 2 = 21 - 42;
// 3 = 43 - 62;

// ------------------------------------------

let a = 40;

if (a >= 1 && a <= 20) {
    console.log("Перший під'їзд");
} else if (a >= 21 && a <= 42) {
    console.log("Другий під'їзд");
} else if (a >= 43 && a <= 62) {
    console.log("Третій під'їзд");
} else {
    console.log("Такого під'їзда немає");
}
// ------------------------------------------
window.onload = function () {

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    console.log(randomInteger(1, 10));
    //виводимо в консоль генероване число

    let userNum = document.querySelector('#user-num');

    document.querySelector('#btn').onclick = checkNum;

    function checkNum() {
        let num = userNum.value;
        num = parseInt(num);
        console.log(num);
        // isNaN('aaaa') -> true
        // isNaN(4) -> false
        if (isNaN(num)) {
            alert('Введите корректное число');
        } else {
            if (num == rand) {
                alert('Вы угадали!!!!');
                location.reload();
            } else {
                alert('Пробуй еще!');
            }
        }
    }
};