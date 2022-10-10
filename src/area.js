const base = document.getElementById("sideA");
const height = document.getElementById("sideB");
const btn = document.getElementById("check");
const output = document.getElementById("output");

function clickHandler() {
  if (parseInt(base.value) > 0 && parseInt(height.value) > 0) {
    output.innerHTML =
      "The area of given triangle is " +
      Math.round((1 / 2) * (base.value * height.value) * 10) / 10 +
      " cm²";
  } else {
    output.innerHTML = "Base and height can neither be negative nor be zero";
  }
}

btn && btn.addEventListener("click", clickHandler);
