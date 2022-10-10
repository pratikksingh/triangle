const angle1 = document.getElementById("angle1");
const angle2 = document.getElementById("angle2");
const angle3 = document.getElementById("angle3");
const output = document.getElementById("output");

const checkBtn = document.getElementById("check");
const clickHandlerCheck = () => {
  console.log("clicked");
  output.innerHTML = "";

  if (
    parseInt(angle1.value) < 0 ||
    parseInt(angle2.value) < 0 ||
    parseInt(angle3.value) < 0 ||
    parseInt(angle1.value) === 0 ||
    parseInt(angle2.value) === 0 ||
    parseInt(angle3.value) === 0
  ) {
    output.innerHTML = "Angles cannot be negative nor can be zero";
  } else if (
    parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value) ===
      180 &&
    parseInt(angle1.value) > 0 &&
    parseInt(angle2.value) > 0 &&
    parseInt(angle3.value) > 0
  ) {
    output.innerHTML =
      "Correct!! The sum of angles is 180. So, It's a triangle.";
  } else if (!angle1.value) {
    output.innerHTML = "";
  } else if (
    parseInt(angle1.value) + parseInt(angle2.value) &&
    parseInt(angle2.value) + parseInt(angle3.value) &&
    parseInt(angle3.value) !== 180 &&
    parseInt(angle1.value) > 0 &&
    parseInt(angle2.value) > 0 &&
    parseInt(angle3.value) > 0
  ) {
    output.innerHTML =
      "Oops, the sum of angles is not 180. So, It's not a triangle.";
  }
};

checkBtn && checkBtn.addEventListener("click", clickHandlerCheck);
