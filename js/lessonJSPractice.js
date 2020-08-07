function fun1() {
    let checks = document.getElementById('one');

    if (checks.checked) {
        console.log('Check');
    } else {
        console.log('Uncheck');
    }
}


function fun2() {
    let radi = document.getElementsByName('r1');
    for (let i = 0; i < radi.length; i++) {
        if (radi[i].checked) {
            console.log('Вибраний ' + i + ' елемент');
        }
    }
}

function fun3() {
    let sel = document.getElementById('selec').selectedIndex;
    let optio = document.getElementById('selec').options;
    console.log('Вибрана опція ' + optio[sel].text);
}

function fun4() {
    let an = document.getElementById('ran');
    let ar = document.getElementById('par');
    ar.innerHTML = an.value;
}



function gen() {
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbl = document.getElementById('rbl').value;
    let rbr = document.getElementById('rbr').value;

    let block = document.getElementById('block');

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbl + 'px ' + rbr + 'px ';
}










// end