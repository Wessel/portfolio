// Elements
const title = document.querySelector('#typewriter');
const main = document.getElementById('main');
// Typewriter data
const cat = '<span id="cat">cat</span>';
const blink = '<span id="blink">|</span>';
const blank = '<span style="opacity: 0;">|</span>'
const prefix = '<span id="bracket">[</span><span id="uname">wessel</span><span id="@">@</span><span id="hostname">helix</span><span id="bracket">]</span>$ <span id="command">'
const typeSpeed = 100;
const blinkSpeed = 500;
const f = t => `<span id="filename">${t}</span>`;
// Typewriter frames
const frames = [
  { t: `${prefix}${blank}`, ms: blinkSpeed },
  { t: `${prefix}${blink}`, ms: blinkSpeed },
  { t: `${prefix}${blank}`, ms: blinkSpeed },
  { t: `${prefix}${blink}`, ms: blinkSpeed },
  { t: `${prefix}c${blink}`, ms: typeSpeed },
  { t: `${prefix}ca${blink}`, ms: typeSpeed },
  { t: `${prefix}${cat}${blink}`, ms: typeSpeed },
  { t: `${prefix}${cat} ${f('i')}${blink}`, ms: typeSpeed },
  { t: `${prefix}${cat} ${f('in')}${blink}`, ms: typeSpeed },
  { t: `${prefix}${cat} ${f('inf')}${blink}`, ms: typeSpeed },
  { t: `${prefix}${cat} ${f('info')}${blink}`, ms: blinkSpeed },
  { t: `${prefix}${cat} ${f('info')}${blank}`, ms: blinkSpeed },
  { t: `${prefix}${cat} ${f('info')}${blink}</span>`, ms: blinkSpeed },
];

let i = 0;
let update = () => {
  let step = frames[i];
  title.innerHTML = step.t;
  i++;

  if (i < frames.length) {
    setTimeout(update, step.ms);
  } else {
    let blinkState = 0;
    const blinkElem = document.querySelector('#blink');

    title.classList.add('top');

    setTimeout(() => {
      main.style.opacity = 1;
      title.style.position = 'relative';
      main.classList.remove('unselectable');
    }, 400);

    setInterval(() => {
      blinkElem.style.opacity = blinkState;
      blinkState = blinkState < 1 ? blinkState + 1 : blinkState - 1;
    }, blinkSpeed);

  }
}
update();