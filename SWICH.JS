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
