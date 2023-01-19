// Values showing/hiding extended skill fields
const delay = 300;
const border = '2px solid white';
// Contact + work information div
let contact = document.getElementById('contact');
// Skill spans
const skills = [
  document.querySelector('.other'),
  document.querySelector('.html'),
  document.querySelector('.njs'),
  document.querySelector('.py')
];
// extended skill fields
const extend = {
  'more': document.getElementsByClassName('other more')[0],
  'HTML': document.getElementsByClassName('html more')[0],
  'NodeJS': document.getElementsByClassName('njs more')[0],
  'Python': document.getElementsByClassName('py more')[0]
}

// Show/hide extended elements
// @TODO fix border showing if show and collapse too fast
const sh = (elem, state = 0) => {
  if (state === 0) {
    elem.style.opacity = 0;
    setTimeout(() => {
      elem.style.border = '';
      elem.style['font-size'] = '0rem';
    }, delay);
  } else if (state === 1) {
    setTimeout(() => {
      elem.style.height = 'auto';
      elem.style['font-size'] = '0.95rem';
      elem.style.border = border;
      elem.style.opacity = 1;
    }, delay);
  }
}

const handler = (field, ...others) => {
  field.onclick = () => {
    const file = document.querySelector('#filename')
    if (field.active === 1) {
      field.active = 0;
      file.innerHTML = 'info';
      sh(extend[field.innerText], 0);
      setTimeout(() => contact.style.opacity = 1, 300);
    } else {
      contact.style.opacity = 0;
      field.active = 1;

      for (let entry of others) {
        entry.active = 0;
        sh(extend[entry.innerText], 0);
      }

      file.innerHTML = `info/<span id="autocomplete">${field.innerText}</span>`;
      sh(extend[field.innerText], 1);
    }
  }
};


handler(skills[0], skills[1], skills[2], skills[3]);
handler(skills[1], skills[2], skills[3], skills[0]);
handler(skills[2], skills[3], skills[0], skills[1]);
handler(skills[3], skills[0], skills[1], skills[2]);