/*
console.log(`Estoy en operators-control.js`)

var userName = "Maxi"
var userLastName="Gartner"
var userAge=29
console.log(userName,userLastName,userAge)

var userFullName = userName + " " + userLastName;
console.log(`Bienvenido ${userFullName}`)
console.log(`Mi nombre es ${userName}, mi apellido es ${userLastName} y mi edad es ${userAge} años`);

var numberOne = 10;
var numberTwo = 20;

var sum = numberOne + numberTwo;

console.log("La suma es", sum);
console.log(`La suma es ${sum}`);
console.log(`La suma de ${numberOne} + ${numberTwo} es ${sum}`);

var numberThree = 30

numberThree += 10;

console.log("numberThree",numberThree);

const numbrtFour =40;
console.log("numbrtFour",numbrtFour);

const isEqualNumber = 10 === 10; //true
console.log("isEqualNumber", isEqualNumber)

const isEqualString = 10 === "10"; // false
console.log("isEqualString", isEqualString)

const isEqualString2 = 10 == "10"; // true
console.log("isEqualString2", isEqualString2)

const isGreaterToLeft = 10>5 //true
const isGreaterToLeft2 = 10<5 // false
const isGreaterToLeft3 = 10<=10 // true

const numberFive =10
const numberSix = 20
console.log("numberFive less than numberSix",numberFive < numberSix)

const age_user = promp("¿Cual es tu edad?")
console.log("ageUser",age_user)
console.log("typeof age_user",typeof age_user)

if (age_user < 18){
    console.log("El ususario es menor de edad")
}
if(age_user > 18){
    console.log("El ususario es mayor de edad")
}

if (age_user < 18){
    console.log("El ususario es menor de edad")
}else{
    console.log("El ususario es mayor de edad")
}
*/
const age_user2 = prompt("¿Cual es tu edad?")

if (age_user2 < 17){
    console.log("El usuario es joven")
}else if(age_user2 >= 18 && age_user2 < 80){
    console.log("El usuario es adulto")
}
else{
    console.log("El usuario esta viejazo")
}