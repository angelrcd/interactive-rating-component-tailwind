export const buttonSelectors = document.querySelectorAll(".lista-botones button");

function removeAllSelectedButtons() {
  buttonSelectors.forEach(button => {
    button.classList.remove("bg-orange-500", "text-white", "ring-2", "ring-white");
    button.classList.add("bg-gray-700", "text-gray-400", "hover:bg-gray-500");
  });
}

function addButtonSelectedStyle(button) {
  button.classList.remove("bg-gray-700", "text-gray-400", "hover:bg-gray-500");
  button.classList.add("bg-orange-500", "text-white", "ring-2", "ring-white");
}

buttonSelectors.forEach(button => {
  button.addEventListener("click", () => {
    removeAllSelectedButtons();
    addButtonSelectedStyle(button);
  });
});
