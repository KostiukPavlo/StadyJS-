// let admin;
// let name;
// name = "Джон";
// admin = name;
// alert(admin);
// let ourPlanetName = 'Земля';
// let currentUserName = 'Джон';
// let pass = ' ';
// let love = 'love';
// console.log(currentUserName + pass + love + pass + ourPlanetName);
// let str2 = 'Одинарные кавычки тоже подойдут';
// let str = `string ${str2}`;
// console.log(str);
// let name = 'Павло';
// let hello = `Привіт ${name}`;
// alert(hello);
// alert(`Результат ${5*3}`);
// alert("результат: ${1 + 2}");
// let boolean = 5 < 1;
// typeof boolean;
// let counter = 1;
// alert(2 * counter);
// counter++;
// alert(counter++);
// let n = 5;
// n += 5;
// n += 2;
// alert(n);
// let a;
// a < 10;
// a++;
// alert(a++);
// let set = 'One' < 'one';
// alert(set);
// alert("12" > "2");
// let name = prompt('Как тебя зовут ?', ' ');
// alert(`Меня звать ${name}`);
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}