/*
const expression = "papayas"
switch (expression){
    case "oranges":
        console.log("orange are $1 a pound")
        break;
    case "mangoes":
        break
    case "papayas":
        console.log("mangoes and papayas are $2")
        break;
    case "apple":
        console.log("we are fuits and a great source of vitammin c")
        break;
    default:
        console.log(`Sorry , we are out of ${expression}`)
}
*/
const animal = prompt("¿Cual es tu animal favorito?")

if(animal === "cat"){
    console.log("the cats are amazing")
}else {
    console.log("the other pets too are funny")
}


animal === "cat"
    ? console.log("the cats are amazing", animal)
    : console.log("the others pets to are fynny")

const teamUser = prompt("¿Cual es tu equipo favorito?")

teamUser ==="River Plate"
    ? console.log("you're a great fan")
    : console.log("you're a bad fan")