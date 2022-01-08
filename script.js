'use strict';

function game() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  
  function guessNumber() {
  let userNum = prompt('Угадай число от 1 до 100'); 
  
    if (userNum === null) {
      alert('Игра окончена');
      return 'Игра окончена';
    }

    if (+userNum === randomNum) {
      alert('Поздравляю, Вы угадали!!!');
      return userNum;
    }
  
    switch (true) {
    case !userNum.trim() || isNaN(userNum):
      alert('Можно вводить только числа'); break;
    case +userNum > randomNum:
      alert('Загаданное число меньше'); break;
    case +userNum < randomNum:
      alert('Загаданное число больше'); break;
    }
    
    userNum = guessNumber();
    return userNum;
  }
  
  return guessNumber;
}

const play = game();

console.log(play());


