const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  console.log(window.innerHeight);
}

checkBoxes();
