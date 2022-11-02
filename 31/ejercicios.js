1
function sumarItem(item1, item2) {
    let resultado1 = item1 + item2
    console.log(`El resultado de sumar ${resultado1}`)
}
sumarItem(2 , 5 )
sumarItem(3 , 6 )
sumarItem(4 , 7 )

2
function restarItem(item1, item2){
    let resultado2 = item1 - item2
    console.log(`El resultado de restar ${resultado2}`)
}
restarItem(2 , 5 )
restarItem(3 , 6 )
restarItem(4 , 7 )

3
function dividirItem(item1, item2){
    let resultado3 = item1 / item2
    console.log(`El resultado de dividir ${resultado3}`)
}
dividirItem(2 , 5 )
dividirItem(3 , 6 )
dividirItem(4 , 7 )

4
function multiplicarItem(item1 , item2){
    let resultado4 = item1 * item2
    console.log(`El resultado de multiplicar ${resultado4}`)
}
multiplicarItem(2, 5 )
multiplicarItem(3 , 6 )
multiplicarItem(4 , 7 )

5
const frutas = ["banana", "manzana", "pera", "naranja", "durazno", "mandarina", "arandanos", "sandia"];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

6
const animales = ["mono","caballo","leopardo","jirafa","elefante","perro","gato","paloma"]

for (let i = 0; i < animales.length; i++){
    console.log(animales[i])
}

7

const calculador = (opcion, valor1, valor2) => {
    if (opcion === 1) {
        sumarItem (valor1, valor2)
    }
    if (opcion === 2) {
        restarItem (valor1, valor2)
    }
    if (opcion === 3) {
        dividirItem (valor1, valor2)
    }
    if (opcion === 4) {
        multiplicarItem (valor1, valor2)
    }

    console.log(calculador)}


/* 8
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))

for (let i = 0; i <fetch.length; i++) {
    console.log(fetch[i].name)
} */


9
const numerosUsuarios = [];
let i = 0;
do {
    let numeros = prompt('Ingresar Numeros');
    numerosUsuarios.push(numeros);
    i++;
} while (i < 5);

const ordenar = (a) => a.sort();

console.log(numerosUsuarios);

console.log("Numeros ordenados:",ordenar(numerosUsuarios));

///////////////////////////////////////otra forma de hacer el 9
let arrayNumbers = [];
for (let i=0; i <= 5; i++) {
    let numbers = parseInt(prompt("Ingrese un numero:"));
    arrayNumbers.push(numbers);
}
console.log(arrayNumbers);
menAMay(arrayNumbers);
mayAMen(arrayNumbers);

function menAMay(array) {
    array.sort(function(a, b){return a - b});
    console.log(array);
}
function mayAMen(array) {
    array.sort(function(a, b){return b - a}); 
    console.log(array);
}

10

/* Los eventos de JavaScript permiten la interacción entre las aplicaciones JavaScript y los usuarios. 
Cada vez que se pulsa un botón, se produce un evento. 
Cada vez que se pulsa una tecla, también se produce un evento.

onclick es un evento que te permite hacerle un click a un elemento del doom y ejecutar codigo javascript

onchange se ejecuta cuando se trata de cambiar una opcion dentro del mismo elemento y nos muestra el valor

onkeydown se activa cuando se esta tecleando el el elemento

onmusehover el evento se ejecuta cuando pasas el muse sobre el elemento

onsubmit se ejecuta cuando pulsas el botond de enviar

onscrool El evento onscroll ocurre cuando se desplaza la barra de desplazamiento de un elemento.
 */


