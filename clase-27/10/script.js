const arratUsers = ["fabi","leo","andi","cata","isa"];

console.log(`La posicion en el array de andi es el n°${arratUsers.indexOf("andi")}`);

console.log(`Es true o false? ${arratUsers.includes("andi")}`);
console.log(`Es true o false? ${arratUsers.includes("maxi")}`);

console.warn("toString = converir a string un numero")
const number = 15;
console.log("number to string", number);
console.log("number to string", number.toString());
console.log("number to string", Number(number));

console.warn("Como concatenar arrays")
const arrayUsers2 = ["leo","rochius","jose","cami","andi"];
const arrayUsers3 = ["esteban","brisa","juan","ivan"]
console.log(arratUsers.concat(arrayUsers2,arrayUsers3));
console.log(arrayUsers2.concat(arrayUsers3,arratUsers));