const DOMSelectors = {
  type: document.querySelector(".Name").value,
  name: document.querySelector(".Type").value,
  weight: document.querySelector(".Weight").value,
  form: document.querySelector("form"),
  button: document.querySelector(".btn"),
};

console.log(DOMSelectors.button);
/* event.preventDefault = no refresh*/
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
});
