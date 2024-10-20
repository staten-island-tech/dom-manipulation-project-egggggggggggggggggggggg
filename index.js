const DOMSelectors = {
  form: document.querySelector("form"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
};

console.log(DOMSelectors);
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
  const element_selected = event.target.closest('.card');
  element_selected.addEventListener('mousedown', ()=> {
      console.log('Hold down for 2 seconds to delete')
      element_selected.classList.add("holding");
      const animations = [
        {time:500, animation:  "shaking 0.25s infinite" },
        {time:1000, animation:"shaking 0.125s infinite"},
        {time:1500, animation:"shaking 0.09 infinite"}
      ]
      const timers = animations.map(({duration, animation}, index) => 
        setTimeout(()=>element_selected.style.animation=animation,duration)
      )
      const deleteElement = setTimeout(()=> {
        element_selected.remove();
      },2000);

      const clearTimers = () => {
        timers.forEach(clearTimeout);
        clearTimeout(deleteElement);
        element_selected.classList.remove("holding");
        element_selected.style.animation="";
      }
      element_selected.addEventListener("mouseleave", clearTimers);
      element_selected.addEventListener("mouseup", clearTimers);
    })
  })
 

