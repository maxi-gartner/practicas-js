function greeting(){
    console.log("hello world")
    console.log("ya te salude")
}
greeting();

const greeetingarrowfunction = () => {
    console.log("hello world")
    console.log("ya te salude")
}
greeting();

function sun(value1, value2) {
    console.log(value1 + value2 )
    const result = value1 + value2;
};
sun(5, 10);


function sunWhitReturn(value1, value2) {
    if (typeof value1 === "number" && typeof value2 === "number") {
    return (value1 + value2)
}else{
    return ("Uno o ambos valores no son numeros")}}

console.log(sunWhitReturn(5,"perri"));
console.log(sunWhitReturn(5,2));

const sumWithValidation = (value1, value2) =>{
    if (typeof value1 === "number" || typeof value2 === "number") {
        return "Valor inválido";
    }else{
        return value1 + value2;
    }
}
console.log(sumWithValidation(2,"2"))