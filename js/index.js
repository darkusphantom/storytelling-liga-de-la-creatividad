const btn = document.querySelector('#btn');

const runningAnimation = (target) => {
  target.style.animationPlayState = "running";
}

const runningAnimationAll = (target) => {
  target.forEach(element => element.style.animationPlayState = "running");
}

const scene1 = () => {
  const screenText = document.querySelector('#text');
  const screenTextElement = screenText.querySelectorAll('span');
  const room = document.querySelector('#room');
  const wall = room.querySelector('.wall');
  const personDP = document.querySelector('#dp');
  const sceneLine = document.querySelector('#scene-line1');
  const sceneLineText = sceneLine.querySelectorAll('div p');
  const shadow = document.querySelector('#shadow1');

  runningAnimation(screenText);
  runningAnimationAll(screenTextElement);
  runningAnimation(room);
  runningAnimation(wall);
  runningAnimation(personDP);
  runningAnimation(sceneLine);
  runningAnimationAll(sceneLineText);
  runningAnimation(shadow);
}

btn.addEventListener('click', (event) => {
  const tabletBtn = event.target;
  const tablet = document.querySelector("#tablet");
  const screen = document.querySelector("#screen");
  if(tabletBtn.checked) {
    tablet.style.animationName = "wideout";
    screen.style.animationName = "powerOn";

    scene1();
  } else {
    screen.style.animationName = "powerOff";
  }
})