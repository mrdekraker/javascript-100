const messageDisplay = document.querySelector('#message-display');
const colorDisplay = document.querySelector('#color-display');
const difficulty = document.querySelectorAll('.difficulty');
const resetBtn = document.querySelector(`#reset`);
const nav = document.querySelector('nav');
const colors = [];
const boxes = document.querySelectorAll('.box');
const boxContainer = document.querySelector('.box-container');
let numBoxes = 3;
let pickedColor;

// generate random color
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

// generate random colors
const generateRandomColors = (num) => {
  const arr = [];
  for (let i = 0; i < num; i += 1) {
    arr.push(randomColor());
  }
  return arr;
};

// pick a random color
const pickColor = () => {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

// change colors of squares
const changeColors = (color) => {
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].style.background = color;
  }
};

// reset function
const reset = () => {
  nav.classList.add(`gradient-animation`);
  nav.style.background = ``;
  colors.length = 0;
  colors.push(...generateRandomColors(numBoxes));
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = '';
  for (let i = 0; i < boxes.length; i += 1) {
    if (colors[i]) {
      boxes[i].style.display = 'block';
      boxes[i].style.background = colors[i];
    } else {
      boxes[i].style.display = 'none';
    }
  }
  // nav.style.background = 'steelblue';
};

resetBtn.addEventListener('click', () => {
  reset();
});

// set up boxes
const setUpBoxes = () => {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      const clickedColor = box.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        changeColors(clickedColor);
        nav.style.background = clickedColor;
        resetBtn.textContent = 'Play Again?';
      } else {
        box.style.background = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  });
};

// set up difficulty
const gameDifficulty = () => {
  difficulty.forEach((button) => {
    button.addEventListener('click', () => {
      difficulty.forEach((btn) => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
      if (button.textContent === 'Easy') {
        numBoxes = 3;
      } else if (button.textContent === 'Medium') {
        numBoxes = 6;
      } else if (button.textContent === 'Hard') {
        numBoxes = 9;
      } else {
        numBoxes = 12;
      }
      reset();
    });
  });
};

// set up game
const startGame = () => {
  setUpBoxes();
  gameDifficulty();
  reset();
};

startGame();
