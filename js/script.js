// Usuario escoge número
// generar un número aleatorio del 1 al 3 --> revisar mathFloor y mathRandom
// cuenta atrás de 5 a 0, getElementByID para imprimir la cuenta atras --> id="countdown"
// No se sabrá que número es hasta que pasen 5 segundos --> usar `setTimeout()` para generar la asincronía de 5 segundos
// id="result" para imprimir los resultados


let randomNum;
let counter = 6;

const userInput = document.getElementById('userInput');
const countdown = document.getElementById('countdown');
const body = document.getElementsByTagName('body')[0]
const result = document.getElementById('result');
//console.log(initGameDos)


// Inicio con click

let bombaGame;
body.addEventListener('click', () => {
    bombaGame = userInput.value;
    if(bombaGame > 0) {
        numRandom();
        console.log(numRandom())
    }
    
})

//Inicio con Enter o NumpadEnter:

userInput.addEventListener('keypress', (key) => {
    if((key.code == 'Enter')||(key.code == 'NumpadEnter')) {
        numRandom();
    }
}) // Todo aqui hasta imprimir en pantalla



//Función con promesa para generar número aleatorio:

function numRandom () {
    const randomNumPromise = new Promise((resolve) =>{
        setTimeout(() =>{
            randomNum = getRandomNum(1, 3);
            resolve(randomNum)
            console.log(randomNum)
        }, 1000)
    })
    randomNumPromise
    .then((num) => {
        console.log('Este es el número aleatorio', num);
    })
}



// Promesa para empezar cuenta atrás:

const countDownPromise = new Promise ((resolve) => {
    let id = setInterval(() => { 
        if(counter == 0) {
            clearInterval(id);
        }
        else {
            counter = counter - 1; 
            countdown.innerHTML = counter; 
        }
        resolve(id)
    }, 1000);
});

// Promesa para comparar elección user con elección aleatoria:

const comparisonPromise = new Promise ((resolve) => {
    let resultComparison = () => {
        if(randomNum == bombaGame) {
            result.innerHTML = '<p>¡Has salvado el mundo!</p>'
        }
        else {
            result.innerHTML = '<p>La Bomba ha estallado</p>'
        }
        resolve(resultComparison);
        console.log(resultComparison)
    }
})

    
//Funcion para generar número aleatorio

function getRandomNum(min, max) {
    return Math.floor(Math.random() * max + min);
}


