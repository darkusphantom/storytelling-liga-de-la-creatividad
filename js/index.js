const btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
  const tabletBtn = event.target;
  const tablet = document.querySelector("#tablet");
  const screen = document.querySelector("#screen");

  if(tabletBtn.checked) {
    tablet.style.animationName = "wideout";
    screen.style.animationName = "powerOn";
  } else {
    screen.style.animationName = "powerOff";
  }
})