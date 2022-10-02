const elementFirst = document.getElementsByName("option");
const elementSecond = document.getElementsByName("option2");
const elementThird = document.getElementsByName("option3");
// const sideB = document.getElementById("sideB");
// const btn = document.getElementById("check");
const outputDiv = document.getElementById("output");
const btn = document.getElementById("resultBtn");
let score = 0;
function clickHandler() {
  score = 0;
  for (let i = 0; i < elementFirst.length; i++) {
    if (elementFirst[i].checked) {
      if (elementFirst[i].value === "30") {
        score++;
      }
    }
  }
  for (let i = 0; i < elementSecond.length; i++) {
    if (elementSecond[i].checked) {
      if (elementSecond[i].value === "5") {
        score++;
      }
    }
  }
  for (let i = 0; i < elementThird.length; i++) {
    if (elementThird[i].checked) {
      if (elementThird[i].value === "Equilateral") {
        score++;
      }
    }
  }

  console.log(score);
  outputDiv.innerHTML = "Your scored: " + score;
}
btn && btn.addEventListener("click", clickHandler);
