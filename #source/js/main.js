// console.log('work');


// let d = 5;
// let v = 12;
// let t = 15;
// let a = (d * v) / (d * t);

// console.log(a);
// alert("Відповідь: " + a);

// document.getElementById('out').innerHTML = 777;

// let p;
// p = document.getElementById('out');
// p.innerHTML = 'Lorem';
// console.log(p);
// let dp;
// dp = document.querySelector('#out');
// dp.innerHTML = 5555;


// let year;
// let myyear;
// let old;
// let yea;
// let pass;
// let o;
// let c;
// year = 2020;
// myyear = 1989;
// old = year - myyear;
// yea = "рік"
// pass = " ";
// o = '<b><i>';
// c = '</b></i>';
// console.log(old + pass + yea);
// alert("Мені" + pass + old + pass + yea);

// p = document.getElementById('my');
// p.innerHTML = old + pass + yea;
// p.innerHTML = o + old + pass + yea + c;

// ======================================================


document.getElementById('show').onclick = function show() {
    document.querySelector('#show_block');
    show_block.hidden = false;

}

document.getElementById('hide').onclick = function hidden() {
    document.querySelector('#show_block');
    show_block.hidden = true;

}
let showModal = document.querySelector('#btn');


function shadow() {
    let modal = document.querySelector('#show_block');
    modal.style.backgroundColor = 'red';

}
showModal.onclick = show;