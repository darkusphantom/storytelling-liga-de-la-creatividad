const btn = document.querySelector('#btn');

const runningAnimation = (target) => {
  target.style.animationPlayState = "running";
}

const runningAnimationAll = (target) => {
  target.forEach(element => element.style.animationPlayState = "running");
}

btn.addEventListener('click', (event) => {
  const tabletBtn = event.target;
  const tablet = document.querySelector("#tablet");
  const screen = document.querySelector("#screen");
  if(tabletBtn.checked) {
    const screenText = document.querySelector('#text');
    const screenTextElement = screenText.querySelectorAll('span');
    const room = document.querySelector('#room');

    tablet.style.animationName = "wideout";
    screen.style.animationName = "powerOn";
    runningAnimation(screenText);
    runningAnimationAll(screenTextElement);
    runningAnimation(room);


  } else {
    screen.style.animationName = "powerOff";
  }
})