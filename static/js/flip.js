const card = document.querySelector('.card');
const buttons = document.querySelectorAll('.buttons button');
let isSwiped = false;
let counter = 0;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!isSwiped) {
      isSwiped = true;
      card.classList.add('swiped');
      counter++;
    };
  })
});