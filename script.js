const boxes = document.querySelectorAll('.box');
const kicks = document.querySelector('.kicks');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.5;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
      kicks.classList.remove('show');
    } else {
      box.classList.remove('show');
    }
  });
}

checkBoxes();
