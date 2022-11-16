const display = document.getElementById("displayText");
const buttomAdd = document.getElementById("buttomAdd");
const buttonDiscount = document.getElementById("buttonDiscount");

let counter = 0;

buttomAdd.addEventListener("click", () => {
    if (counter < 5){
        counter++;
        display.textContent = counter;
    }else{
        buttomAdd.disabled = true;
        alert("Max Number")
    }
})
buttonDiscount.addEventListener("click", () => {
    if (counter > 0){
        counter--;
        display.textContent = counter;
    }else{
        buttonDiscount.disabled = true;
        alert("Min Number")
    }
})


/* buttoms.forEach(buttom => {
    buttom.addEventListener("click", function(e){

        const styles = e.currentTarget.classList;

        if (styles.countains("add")) {
            counter++;
        }
        else if (styles.countains("Discount")) {
            counter--;
        }
        display.textContent = counter;
    })
}) */