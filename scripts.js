// Getting switchs:
const cheapButton = document.querySelector(".toggle-button-cheap");
const fastButton = document.querySelector(".toggle-button-fast");
const niceButton = document.querySelector(".toggle-button-nice");

// Class management:
function switchState(switchName) {
  const result = switchName.classList.contains("active");
  return result
};

function toggleActive(switchName) {
  const result = switchName.classList.toggle("active");
  return result
};

function removeActive(switchName) {
  const result = switchName.classList.remove("active");
  return result
};

// Switchs logic:
cheapButton.addEventListener("click", () => {
  toggleActive(cheapButton);
  if(switchState(fastButton) && switchState(niceButton)) {
    removeActive(niceButton);
  };
});

fastButton.addEventListener("click", () => {
  toggleActive(fastButton);
  if(switchState(cheapButton) && switchState(niceButton)) {
    removeActive(cheapButton);
  };
});

niceButton.addEventListener("click", () => {
  toggleActive(niceButton);
  if(switchState(cheapButton) && switchState(fastButton)) {
    removeActive(fastButton);
  };
});
