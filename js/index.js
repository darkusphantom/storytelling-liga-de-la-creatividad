const btn = document.querySelector('#btn');
const nextScene = document.querySelector('selector');
let counter = 1;

const runningAnimation = (target) => {
  target.style.animationPlayState = "running";
}

const runningAnimationAll = (target) => {
  target.forEach(element => element.style.animationPlayState = "running");
}
/*
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
*/

const scene2 = () => {
  const chatboxKirby = document.querySelector('.chat-box--kirby');
  const chatboxKirbyText = chatboxKirby.querySelectorAll('.kirby__text--scene2');
  const room = document.querySelector('#room2');
  const personDP = document.querySelector('#dp2');
  const chest = document.querySelector('#chest').querySelectorAll('div');
  const sceneLineDP = document.querySelector('.chat-box--dp.chat-box--scene2');
  const sceneLineTextDP = sceneLineDP.querySelectorAll('div p');
  const sceneLineNavy = document.querySelector('.chat-box--navy');
  const sceneLineTextNavy = sceneLineNavy.querySelectorAll('div p');

  runningAnimation(chatboxKirby);
  runningAnimationAll(chatboxKirbyText);
  runningAnimation(room);
  runningAnimation(personDP);
  runningAnimation(sceneLineDP);
  runningAnimationAll(sceneLineTextDP);
  runningAnimationAll(chest);
  runningAnimation(sceneLineNavy);
  runningAnimationAll(sceneLineTextNavy);
}

btn.addEventListener('click', (event) => {
  const tabletBtn = event.target;
  const tablet = document.querySelector("#tablet");
  const screen = document.querySelector("#screen");
  if(tabletBtn.checked) {
    screen.style.animationName = "powerOn";
    tablet.style.animationName = "wideout";
  } else {
    screen.style.animationName = "powerOff";
  }

  if (counter === 0) {
    //scene1();
    counter++;
  } else if(counter === 1) {
    scene2()
    counter++;
  }
})

