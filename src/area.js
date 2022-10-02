const base = document.getElementById("sideA");
const height = document.getElementById("sideB");
const btn = document.getElementById("check");
const output = document.getElementById("output");

function clickHandler() {
  if (base.value && height.value) {
    output.innerHTML =
      "The area of given triangle is " +
      Math.round((1 / 2) * (base.value * height.value) * 10) / 10 +
      " cm²";
  } else {
    return;
  }
}

btn && btn.addEventListener("click", clickHandler);
