const array_numbers =[1,2,3,4,5]
console.log("array_numbers",array_numbers, typeof array_numbers )
console.log("is Array?", Array.isArray(array_numbers))

const fruitsArray = ["apple","banana","orange","watermelon","pineapple","strawberry","apple","banana","orange","watermelon","pineapple","strawberry","apple","banana","orange","watermelon","pineapple","strawberry","apple","banana","orange","watermelon","pineapple","strawberry","bananita dolca"]
console.log(`Acceder al 1 elemento de un array --> ${fruitsArray[0]}`)
console.log(`Acceder al 2 elemento de un array --> ${fruitsArray[1]}`)
console.log(`Acceder al 3 elemento de un array --> ${fruitsArray[2]}`)
console.log(`Acceder a la cantidad de elemento de un array --> ${fruitsArray.length}`)
console.log(`Acceder al ultimo elemento de un array --> ${fruitsArray[fruitsArray.length -1]}`)

// while
let count = 10
while (count < 20){
    console.log("contator",count)
    count = count + 1
}

// do while
let countDoWhile = 10
do{
    console.log("Dowhile",countDoWhile)
    countDoWhile = countDoWhile + 1
}
    while (countDoWhile < 20){
}

// for
let countFor = 10

for(let i = 0 ; i<countFor; i++){
    console.log("inciatec",i)
}

for (let i= 0; i < countFor; i++){
    console.log(`El valor del contador es ${i}`);
}

const arrayToFor = [1,2,3,4,5,6,7,8,9,10]
for (let i=0; i< arrayToFor.length;i++){
    console.log(`El valor del índice es ${i} del elemento es ${arrayToFor[i]}`)
}

const users = {
    name: "Jose",
    lastName: "Vallejos",
    age: 27,
    isMarried: false,
    isWorking: true,
    placeJob:{
        namePosition: "Secretario",
        typeCompany: "abogacia",
        InAges: 3
    },
    hasPets: true,
    pets:["marmota","nutria"],
    study:["css","html","js"]
}
console.log(users[1]) // no funciona en objetos

//para objetos se usa objet.propeti
console.log(users.name)
console.log(`El usuario se llama ${users.name} y se apellida ${users.lastName}`)
// para ver claves del objeto
console.log(users)
console.log(users.placeJob.namePosition)
console.log(users.study[3])
console.log(users.study[2].tec)
console.log(userJL.studies[1].technology)

