import "./modules/dom.js";
let currentPuntuation = 0;
const buttonSelectors = document.querySelectorAll(".lista-botones button");
const submitButtonSelector = document.querySelector(".boton-submit");
const cardContainer = document.querySelector(".container");

function changeCurrentPuntuation(puntuation) {
  currentPuntuation = puntuation;
  console.log(currentPuntuation);
}

function changeCardContent(puntuation) {
  cardContainer.innerHTML =
  `
  <img src="/images/illustration-thank-you.svg" alt="icono estrella" class="object-contain w-48 h-36 self-center">
      <p class="text-orange-500 w-3/5 rounded-full text-center bg-gray-700 self-center">You selected ${currentPuntuation} out of 5</p>
      <h1 class="text-white text-3xl text-center">Than you for your rating!
      </h1>
  `;
}

buttonSelectors.forEach((button, index) => {
  button.addEventListener("click", () => {
    changeCurrentPuntuation(index + 1);
  });
});

submitButtonSelector.addEventListener("click", () => {
  if (currentPuntuation === 0) {
    alert("Please select a score");
  } else {
    changeCardContent(currentPuntuation);
  }
});
