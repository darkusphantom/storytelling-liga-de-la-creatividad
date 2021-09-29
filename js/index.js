const btn = document.querySelector('#btn');
const nextScene = document.querySelector('selector');
let counter = 0;
//let validation = [false, false, false ,false];

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
  const chatboxKirby = document.querySelector('#kirby--scene1');
  const chatboxKirbyText = chatboxKirby.querySelector('.kirby__text--scene1');

  runningAnimation(screenText);
  runningAnimationAll(screenTextElement);
  runningAnimation(room);
  runningAnimation(wall);
  runningAnimation(personDP);
  runningAnimation(sceneLine);
  runningAnimationAll(sceneLineText);
  runningAnimation(shadow);
  runningAnimation(chatboxKirby);
  runningAnimation(chatboxKirbyText);
}

const scene2 = () => {
  const chatboxKirby = document.querySelector('#kirby--scene2');
  const chatboxKirbyText = chatboxKirby.querySelectorAll('.kirby__text--scene2');
  const room = document.querySelector('#room2');
  const personDP = document.querySelector('#dp2');
  const chest = document.querySelector('#chest').querySelectorAll('div');
  const sceneLineDP = document.querySelector('.chat-box--dp.chat-box--scene2');
  const sceneLineTextDP = sceneLineDP.querySelectorAll('div p');
  const navy = document.querySelector('#navi--scene2');
  const sceneLineNavy = document.querySelector('.chat-box--navy');
  const sceneLineTextNavy = sceneLineNavy.querySelectorAll('div p');

  runningAnimation(chatboxKirby);
  runningAnimationAll(chatboxKirbyText);
  runningAnimation(room);
  runningAnimation(personDP);
  runningAnimation(sceneLineDP);
  runningAnimationAll(sceneLineTextDP);
  runningAnimationAll(chest);
  runningAnimation(navy);
  runningAnimation(sceneLineNavy);
  runningAnimationAll(sceneLineTextNavy);
}

const scene3 = () => {
  const chatboxKirby = document.querySelector('#kirby--scene3');
  const chatboxKirbyText = chatboxKirby.querySelectorAll('.kirby__text--scene3');
  const hall = document.querySelector('#hall');
  const personDP = document.querySelector('#dp3');
  const sceneLineDP = document.querySelector('.chat-box--dp.chat-box--scene3');
  const sceneLineTextDP = sceneLineDP.querySelectorAll('div p');
  const navy = document.querySelector('#navi--scene3');
  const sceneLineNavy = document.querySelector('#scene-line3--navy');
  const sceneLineTextNavy = sceneLineNavy.querySelectorAll('div p');
  const windowScene = document.querySelector('#window-scene3');
  const doorHall = document.querySelector('#doorHall-scene3');

  runningAnimation(chatboxKirby);
  runningAnimationAll(chatboxKirbyText);
  runningAnimation(hall);
  runningAnimation(personDP);
  runningAnimation(sceneLineDP);
  runningAnimationAll(sceneLineTextDP);
  runningAnimation(navy);
  runningAnimation(sceneLineNavy);
  runningAnimationAll(sceneLineTextNavy);
  runningAnimation(windowScene);
  runningAnimation(doorHall);
}

btn.addEventListener('click', (event) => {
  const tabletBtn = event.target;
  const tablet = document.querySelector("#tablet");
  const screen = document.querySelector("#screen");
  if(tabletBtn.checked) {
    screen.style.animationName = "powerOn";
    tablet.style.animationName = "wideout";
  } else {
    //screen.style.animationName = "powerOff";
  }

  if (counter === 0) {
    scene1();
    counter++;
  } else if(counter === 1) {
    scene2()
    counter++;
  } else if(counter === 2) {
    scene3()
  }
})

