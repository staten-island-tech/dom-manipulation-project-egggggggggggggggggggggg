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

  console.log("this is the element target",element_selected.classList.contains("container"))
  element_selected.addEventListener('mousedown', ()=> {
      console.log('Hold down for 2 seconds to delete')
      element_selected.classList.add("holding");
      const speedUp1= setTimeout(()=> 
        {
          element_selected.style.animation = "shaking 0.25s infinite"
          
        }, 500
      ) 
      const speedUp2= setTimeout(()=> 
        {
          element_selected.style.animation = "shaking 0.125s infinite"
        }, 1000
      ) 
      const Timer = setTimeout(()=>
        {
          element_selected.remove();
        },2000)
      element_selected.addEventListener("mouseup",()=>
      {
        clearTimeout(Timer,speedUp1,speedUp2);
        element_selected.classList.remove("holding")
      })
      element_selected.addEventListener("mouseleave",()=>
      {
        element_selected.classList.remove("holding")
        element_selected.classList.remove("speedUp1")
        element_selected.classList.remove("speedUp2")
        clearTimeout(Timer);
      })
    })
  })
