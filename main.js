let btns = document.getElementsByClassName('tablinks');

Array.prototype.forEach.call(btns, (btn) => {
  btn.addEventListener('click', openBlock);
  // btn.addEventListener('touchstart', openBlock);
});

let icon = document.getElementsByClassName('icon')[0];
icon.addEventListener('click', responsive);
// icon.addEventListener('touchstart', responsive);

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// Functions
function openBlock(event) {
  // Declare all variables
  let currentBtn = document.getElementsByClassName('active')[0];
  let currentTab = document.getElementById(currentBtn.dataset.block);
  let pressedBtn = event.target;

  // Remove active class from current button and the current tab make display: none
  currentTab.style.display = "";
  currentBtn.classList.remove('active');

  // Add the active class to the pressed button and make the corresponding tab visible
  pressedBtn.classList.add('active');
  document.getElementById(pressedBtn.dataset.block).style.display = "block";
}

function responsive() {
  let tabNav = document.getElementById("myTabNav");

  if (tabNav.classList.value.indexOf('responsive') == -1) {
    tabNav.classList.add("responsive");
  } else {
      tabNav.classList.remove("responsive");
  }
}