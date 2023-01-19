const name = document.querySelector('#typewriter');
const blink = '<span id="blink">|</span>';
const typeSpeed = 150;
const blinkSpeed = 500;

const frames = [
  { t: `{ }`, ms: blinkSpeed },
  { t: `{${blink}}`, ms: blinkSpeed },
  { t: `{ }`, ms: blinkSpeed },
  { t: `{${blink}}`, ms: blinkSpeed },
  { t: `{W${blink}}`, ms: typeSpeed },
  { t: `{WE${blink}}`, ms: typeSpeed },
  { t: `{WES${blink}}`, ms: typeSpeed },
  { t: `{WESS${blink}}`, ms: typeSpeed },
  { t: `{WESSE${blink}}`, ms: typeSpeed },
  { t: `{WESSEL${blink}}`, ms: typeSpeed },
  { t: `{WESSEL }`, ms: blinkSpeed },
  { t: `{WESSEL${blink}}`, ms: blinkSpeed },
  { t: `{WESSEL}`, ms: blinkSpeed },
];

let i = 0;
let update = () => {
  let step = frames[i];
  name.innerHTML = step.t;
  i++;

  if (i < frames.length) {
    setTimeout(update, step.ms);
  } else {
    let blinkState = 0;
    const blinkElem = document.querySelector('#blink');

    name.classList.add('top');

    setTimeout(() => {
      document.getElementById('main').style.opacity = 1;
      document.getElementById('name').style.position = 'relative';
    }, 400);

    // setInterval(() => {
    //   blinkElem.style.opacity = blinkState;
    //   blinkState = blinkState < 1 ? blinkState + 1 : blinkState - 1;
    // }, blinkSpeed);

  }
}
update();