//! Variables / Elementos DOM
let active = 'red';
funcion = 'auto',
i = 0;

const red = document.getElementById('red'),
btn_red = document.getElementById('btn-red'),
yellow = document.getElementById('yellow'),
btn_yellow = document.getElementById('btn-yellow'),
green = document.getElementById('green'),
btn_green = document.getElementById('btn-green');

const btn_manual = document.getElementById('btn-manual'),
btn_auto = document.getElementById('btn-auto');


//! Funcionamiento 

//? Auto change
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function auto() {
    do {
        if (i<=10) {
            yellow.classList.remove('active')
            green.classList.remove('active')
            btn_yellow.classList.remove('active')
            btn_green.classList.remove('active')
            red.classList.add('active')
            btn_red.classList.add('active')
            
            await esperar(4000);
        }

        if (i<=10) {
            red.classList.remove('active')
            btn_red.classList.remove('active')
            yellow.classList.add('active')
            btn_yellow.classList.add('active')
            
            await esperar(2000);
        }

        if (i<=10) {
            yellow.classList.remove('active')
            btn_yellow.classList.remove('active')
            green.classList.add('active')
            btn_green.classList.add('active')
            
            await esperar(5000);
        }

    } while(i<=10);
}

auto();

function auto_active() {
    funcion = 'auto';
    i = 0;
    console.log(funcion)
    btn_auto.classList.add('active')
    btn_manual.classList.remove('active')
    auto()
}

//? Manual Change
function manual_active() {
    funcion = 'manual';
    i = 11;
    console.log(funcion)
    if(btn_manual.classList.contains('active')){
    }else{
        btn_manual.classList.add('active')
        if(btn_auto.classList.contains('active')){
            btn_auto.classList.remove('active')
        }
    }
}

function red_active() {
    funcion = 'manual'
    manual_active()
    active = 'red'
    console.log(active)
    //* Desactiva los otros dos colores (luz y boton)
    yellow.classList.remove('active')
    green.classList.remove('active')
    btn_yellow.classList.remove('active')
    btn_green.classList.remove('active')
    //* Activa el color elegido (luz y boton)
    red.classList.add('active')
    btn_red.classList.add('active')
}
function yellow_active() {
    funcion = 'manual'
    manual_active()
    active = 'yellow'
    console.log(active)
    red.classList.remove('active')
    green.classList.remove('active')
    btn_red.classList.remove('active')
    btn_green.classList.remove('active')
    yellow.classList.add('active')
    btn_yellow.classList.add('active')
}
function green_active() {
    funcion = 'manual'
    manual_active()
    active = 'green'
    console.log(active)
    red.classList.remove('active')
    yellow.classList.remove('active')
    btn_red.classList.remove('active')
    btn_yellow.classList.remove('active')
    green.classList.add('active')
    btn_green.classList.add('active')
}





// function esperar(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function ejemplo() {
//     console.log("Esperando...");
//     await esperar(2000);  // Espera 2 segundos
//     console.log("Han pasado 2 segundos");
//   }
  
//   ejemplo();
  