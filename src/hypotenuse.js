const sideA = document.getElementById("sideA");
const sideB = document.getElementById("sideB");
const btn = document.getElementById("check");
const output = document.getElementById("output");

function clickHandler() {
  if (sideA.value > 0 && sideB.value > 0) {
    output.innerHTML =
      "The length of the hypotenuse is " +
      Math.round(
        Math.sqrt(sideA.value * sideA.value + sideB.value * sideB.value) * 10
      ) /
        10 +
      " cm";
  } else {
    output.innerHTML = "The length of sides cannot be 0 ";
  }
}

btn && btn.addEventListener("click", clickHandler);
