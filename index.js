const DOMSelectors = {
  form: document.querySelector("form"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector(".Name").value;
  const image = document.querySelector(".IMAGE_URL").value;
  if (!name || !image) {
    console.log("Please enter something");
    return;
  }
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <h2 class="card_header">${name}</h2>
      <img src="${image}" alt="${name}" class="card_img">
    </div>`
  );
  document.querySelector(".Name").value = "";
  document.querySelector(".IMAGE_URL").value = "";
});

DOMSelectors.container.addEventListener("click", function (event) {
  const element_selected = event.target.closest(".card");
  if (!element_selected) return; // Ensure it's a card

  const handleMouseDown = () => {
    const message = document.createElement("div");
    message.className = "delete-message";
    message.innerText = "Hold down for 2 seconds to delete";
    DOMSelectors.container.appendChild(message);
    message.style.position = "absolute";
    message.style.top = `${element_selected.getBoundingClientRect().top}px`;
    message.style.left = `${element_selected.getBoundingClientRect().left}px`;

    const ItemFadeOut = setTimeout(() => {
      const allmessages = document.querySelectorAll(".delete-message");
      allmessages.forEach((message) => 
        message.classList.add("fade-out"),
        message.remove());
    }, 1000);

    element_selected.classList.add("holding");
    const animations = [
      { time: 500, animation: "shaking 0.25s infinite" },
      { time: 1000, animation: "shaking 0.125s infinite" },
      { time: 1500, animation: "shaking 0.09s infinite" },
    ];

    const timers = animations.map(({ time, animation }) =>
      setTimeout(() => (element_selected.style.animation = animation), time)
    );

    const deleteElement = setTimeout(() => {
      element_selected.remove();
    }, 2000);

    const clearTimers = () => {
      timers.forEach(clearTimeout);
      clearTimeout(deleteElement);
      element_selected.classList.remove("holding");
      element_selected.style.animation = "";
    };

    element_selected.addEventListener("mouseleave", clearTimers);
    element_selected.addEventListener("mouseup", clearTimers);
  };

  element_selected.addEventListener("mousedown", handleMouseDown, {
    once: true,
  });
});