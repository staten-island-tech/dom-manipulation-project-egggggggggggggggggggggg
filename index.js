const DOMSelectors = {
  form: document.querySelector("form"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
};

console.log(DOMSelectors);
/* event.preventDefault = no refresh*/
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const type = document.querySelector(".Type").value;
  const name = document.querySelector(".Name").value;
  const weight = document.querySelector(".Weight").value;
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `               <div class="card">
    <h2 class="card_header">${name}</h2>
    <h2 class="stats">${weight}</h2>
    <h2 class="type">${type}</h2>
    <img src=${weight} alt=${weight}>
</div>
  `
  );
});
