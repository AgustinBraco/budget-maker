// Getting switchs:
const cheap = document.querySelector(".cheap");
const fast = document.querySelector(".fast");
const nice = document.querySelector(".nice");

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
cheap.addEventListener("click", () => {
  toggleActive(cheap);
  if(switchState(fast) && switchState(nice)) {
    removeActive(nice);
  };
});

fast.addEventListener("click", () => {
  toggleActive(fast);
  if(switchState(cheap) && switchState(nice)) {
    removeActive(cheap);
  };
});

nice.addEventListener("click", () => {
  toggleActive(nice);
  if(switchState(cheap) && switchState(fast)) {
    removeActive(fast);
  };
});
