const jokeText = document.querySelector(`#joke`);
const nextJoke = document.querySelector('#nextJoke');
const buttonText = [
  `UGH.`,
  `OMGDAD🤦`,
  `Please stop.`,
  `Seriously?`,
  `🤦`,
  `Why?`,
];

async function fetchJoke() {
  const response = await fetch(`http://icanhazdadjoke.com`, {
    headers: {
      Accept: `application/json`,
    },
  });
  const data = await response.json();
  return data;
}

const handleClick = async function () {
  const { joke } = await fetchJoke();
  jokeText.textContent = joke;
  nextJoke.textContent = randomBtnText();
  console.log(joke);
};

const randomBtnText = function () {
  const randomText = buttonText[Math.floor(Math.random() * buttonText.length)];
  return randomText;
};

nextJoke.addEventListener(`click`, handleClick);
