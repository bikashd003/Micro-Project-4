const input = document.getElementById("input");
const buttons = document.querySelectorAll(".keypad");
let result = "";
const footer=document.querySelector("footer");
const date=new Date();


footer.innerHTML=`Designed by Bikash Das ${date.getFullYear()}`

const Calculate = (textContent) => {

    if (textContent == "=") {
        try {

            result = eval(result)
            input.value = result;
            if (isNaN(result)) {
                input.value = "Can't divide by 0"
            }
            else if (!isFinite(result)) {
                input.value = "Invalid input"
            }
        }
        catch (error) {
            input.value = "Error"
        }
    }

    else if (textContent === "RESET") {
        result = ""
        input.value = result;
    }
    else if (textContent === "x") {
        result = result + "*"
        input.value = result;
    }
    else if (textContent === "DEL") {
        input.value = input.value.slice(0, -1);
    }
    else {
        result = result + textContent;
        input.value = result;
    }
}
input.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key == "Enter") {
        Calculate("=");
    }
});

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const textContent = e.target.innerHTML;
        Calculate(textContent);
    })
})