const DOMSelectors = {
  form: document.querySelector("form"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
};

console.log(DOMSelectors);
/* event.preventDefault = no refresh*/
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector(".Name").value;
  const image = document.querySelector(".IMAGE_URL").value;
  if(name===null)
    {
      console.log("Please enter something");
    }
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
    <h2 class="card_header">${name}</h2>

    <img src="${image}" alt="${name}" class= "card_img">
    </div>`
  );
  document.querySelector(".Name").value = "";
  document.querySelector(".IMAGE_URL").value="";

});
DOMSelectors.container.addEventListener("click", function(event)
{
  const element_selected = event.target;
  console.log(element_selected)
}
)