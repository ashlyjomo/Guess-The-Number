'use strict';

/*document.querySelector(`.message`).textContent = `CorrectNumber`;
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.number`)textContent = 10;
 20;

document.querySelector(`.guess`).value = 20;*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//document.querySelector(`.number`).textContent = secretNumber;

//document.querySelector(`.number`).style.color = `#eee`;
document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector(`.message`).textContent = `No Number`;
  } else if (guess === secretNumber) {
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`.message`).textContent = `Correct Number`;
    document.querySelector(`body`).style.backgroundColor = `#7fff00`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    //document.querySelector(`.highscore`).textContent = score+1;
    //document.querySelector(`.number`).style.color = `black`;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too High`;
      document.querySelector(`.score`).textContent = score;

      score--;
    } else {
      document.querySelector(`.message`).textContent = `you lost The Game`;
      document.querySelector(`.score`).textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(`.message`).textContent = `Too Low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `you lost The Game`;
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = `Start guessing`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#232`;
});
