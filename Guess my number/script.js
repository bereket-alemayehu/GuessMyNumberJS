'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);
let number = Math.trunc(Math.random() * 20) + 1;//for game that need number we should use random number generator.
let score = 20;
let highscore = 0;
// here below the again function dose not reload our code it only change those properties that we specified and stop .that means  we are now ready to guess a numbeer this number tend to affect some code that related with it .that means in short we don't reload our code unless we click the reload  button on the top of the browser that makes the browser to read the code from the very beginning of the page to  the end of the code .
// functions///////////////////////////////////
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
}
const displayGuess = function (guess) {
  document.querySelector('.guess').textContent = guess;
}

// /////////////////////////////////////////////


document.querySelector('.again').
  addEventListener('click', function () {
    score = 20;
    displayScore(20);
    document.querySelector('body').style.backgroundColor = '#222';
    displayNumber('15rem');
    document.querySelector('.guess').style.backgroundColor = '#000';
    displayGuess()
    number = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start   guessing...');
    displayNumber('?');
    document.querySelector('.guess').value = '';



  });
// document.querySelector('.number').textContent = number;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔ No Number !');
  }
  else if (guess === number) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumber('30rem');
    displayNumber('🏆');
    document.querySelector('.guess').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? '📈 Too high!' : '📉Too low!');
      score--;
      displayScore(score);
    }
    else {
      displayMessage('💥 You lost the game !');
      displayScore(0);
    }
  }
});



