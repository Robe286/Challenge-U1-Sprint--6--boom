// Usuario escoge número
// generar un número aleatorio del 1 al 3 --> revisar mathFloor y mathRandom
// cuenta atrás de 5 a 0, getElementByID para imprimir la cuenta atras --> id="countdown"
// No se sabrá que número es hasta que pasen 5 segundos --> usar `setTimeout()` para generar la asincronía de 5 segundos
// id="result" para imprimir los resultados


let counter = 6; // Variable global creada para generar el contador regresivo
let userNumber = 0 // Variable global creada para asignar el valor elegido por el user

const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

//Funcion para generar número aleatorio. Usar arrowFunction para poder meterla en una variable,
// si se usa function normal hay que posicionarla al final del script, si no interfiere con la lectura del programa.
// La llamaremos donde la necesitemos llamar.

const getRandomNum = (min, max) => Math.floor(Math.random() * max + min)

// Inicio con click

userInput.addEventListener('change', () => { //Para poder obtener la elección del user escuchamos cualquier cambio en el input de entrada de valores
    userNumber = userInput.value; // para poder usar ese valor lo vamos asignando en una variable global let userNumber = 0
})

//Función para comenzar el juego:

function startGame () {
    count()
    const randomNumPromise = new Promise((resolve) => {
        setTimeout(() =>{
            resolve(getRandomNum(1, 3))  // devuelve el numero aleatorio
        }, 6000) // la promesa respondera/se resolvera al pasar 6 segundos
    })
    return randomNumPromise // Retorna la promesa para despúes sacarla continuando con .then()
}

startGame().then(number => {  // sacamos la promesa y concatenamos las siguientes acciones con .then()
    let mensaje = ''  // Para no hacer dos innerHTML creamos una variable donde se reasignará el mensaje que resulte de la comparación
    if(number == userNumber) {
        mensaje = `¡Has salvado el mundo!. El número seleccionado es ${userNumber} y el número aleatorio es ${number}`
    } else {
        mensaje = `¡Has destruido el mundo!. El número seleccionado es ${userNumber} y el número aleatorio es ${number}`
    }
    result.innerHTML = `<p>${mensaje}</p>` // pintamos en el DOM un parrafo con el mensaje ya reasignado.
})

// Función cuenta atras:

function count () {
    let id = setInterval(() => { 
        if(counter == 0) {
            clearInterval(id); // detiene el intervalo. Si no se detiene la funcion setInterval sige infinitamente.
        }
         else {
            counter = counter - 1; // con -1 generamos la cuenta hacia atrás
            countdown.innerHTML = counter; // pintamos el contador en el DOM
        }
    }, 1000); // cada segundo pinta en el DOM el número: 5, 4, 3, 2, 1, 0
}

//Funcion reiniciar juego:

restart.addEventListener('click', () => {  // Evento de escucha al clickar en boton reiniciar juego
    location.reload()  // Al clickar volverá a cargar la página. ¿Cómo puedo ver donde está ese location? A que hay que hacerle un console.log?
})


    


