// Count area calculated items
let count = 1;

// Calculate Area
const calculateArea = (firstInput, lastInput, button) => {
  let area;

  if (
    button.id === "triangle" ||
    button.id === "rhombus" ||
    button.id === "pentagon"
  ) {
    area = firstInput * lastInput * 0.5;
  } else if (button.id === "ellipse") {
    area = firstInput * lastInput * 3.14159265358979323;
  } else {
    area = firstInput * lastInput;
  }

  updateDom(area.toFixed(2), button);
};

// Update DOM
const updateDom = (area, button) => {
  const calculatedItems = document.getElementById("calculated-area");
  const geometryName =
    button.previousElementSibling.firstElementChild.innerText;
  calculatedItems.innerHTML += `
  <tr class="flex items-center justify-between px-3 mb-2">
      <td>${count++}.${geometryName}</td>
      <td>${area}cm<sup>2</sup></td>
      <td>
        <button class="bg-[#1090D8] text-white p-2 rounded-lg">
          Convert to m<sup>2</sup>
        </button>
      </td>
  </tr>
  `;
};

// Event Listener
document.querySelectorAll(".calculate-btn").forEach(button => {
  button.addEventListener("click", e => {
    const firstInput =
      button.previousElementSibling.lastElementChild.firstElementChild
        .firstElementChild;
    const secondInput =
      button.previousElementSibling.lastElementChild.lastElementChild
        .firstElementChild;

    const firstValue = parseFloat(firstInput.value);
    const secondValue = parseFloat(secondInput.value);

    if (firstInput.value === "" || secondInput.value === "") {
      alert("Please Enter a number");
      return;
    } else if (firstValue <= 0 || secondValue <= 0) {
      alert("The variable should be positive");
      firstInput.value = "";
      secondInput.value = "";
      return;
    } else {
      calculateArea(firstValue, secondValue, button);
      firstInput.value = "";
      secondInput.value = "";
    }
  });
});
