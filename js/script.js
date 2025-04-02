// Usuario escoge número
// generar un número aleatorio del 1 al 3 --> revisar mathFloor y mathRandom
// cuenta atrás de 5 a 0, getElementByID para imprimir la cuenta atras --> id="countdown"
// No se sabrá que número es hasta que pasen 5 segundos --> usar `setTimeout()` para generar la asincronía de 5 segundos
// id="result" para imprimir los resultados


let counter = 6;
let userNumber = 0

const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

//Funcion para generar número aleatorio. Usar arrowFunction para poder meterla en una variable,
// si se usa function normal hay que posicionarla al final del script, si no interfiere con la lectura del programa.
// La llamaremos donde la necesitemos llamar.

const getRandomNum = (min, max) => Math.floor(Math.random() * max + min)

// Inicio con click

userInput.addEventListener('change', () => {
    userNumber = userInput.value;
})

//Función para comenzar el juego:

function startGame () {
    count()
    const randomNumPromise = new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(getRandomNum(1, 3))
        }, 6000)
    })
    return randomNumPromise // Retorna la promesa para despúes sacarla continuando con .then()
}

startGame().then(number => {
    let mensaje = ''
    if(number == userNumber) {
        mensaje = `¡Has salvado el mundo!. El número seleccionado es ${userNumber} y el número aleatorio es ${number}`
    } else {
        mensaje = `¡Has destruido el mundo!. El número seleccionado es ${userNumber} y el número aleatorio es ${number}`
    }
    result.innerHTML = `<p>${mensaje}</p>`
})

// Función cuenta atras:

function count () {
    let id = setInterval(() => { 
        if(counter == 0) {
            clearInterval(id);
        }
         else {
            counter = counter - 1; 
            countdown.innerHTML = counter; 
        }
    }, 1000);
}

//Funcion reiniciar juego:

restart.addEventListener('click', () => {  // Evento de escucha al clickar en boton reiniciar juego
    location.reload()  // Al clickar volverá a cargar la página. ¿Cómo puedo ver donde está ese location? A que hay que hacerle un console.log?
})


    


