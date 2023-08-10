let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

let specialChars = ["%", "*", "/", "+", "-", "="];
let output = "";

let calculate = (btnvalue) => {
  if (btnvalue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnvalue === "AC") {
    output = "";
  } else if (btnvalue === "del") {
    output = output.toString().slice(0, -1);
  } else {
    if (output == "" && specialChars.includes(btnvalue)) return;
    output += btnvalue;
    console.log(output);
  }

  display.value = output;
  console.log(output);
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});



cal();
