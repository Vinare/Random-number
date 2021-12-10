'use strict'

let randomNum = Math.floor(Math.random() * 100) + 1

function guessNumber() {
  let userNum = +prompt('Угадай число от 1 до 100') 
  if (isNaN(userNum) || userNum === "") {
    alert('Можно вводить только числа')
  if (userNum > randomNum) {
    alert('Загаданное число меньше')
    userNum = guessNumber();
    
  } else if (userNum < randomNum) {
    alert('Загаданное число больше')
  } else if (userNum === randomNum) {
    alert('Поздравляю, Вы угадали!!!')
    return userNum;
  } else if (userNum === 0) {
    alert('Нужно угадать число от 1 до 100')
  } else if (userNum == null) {
    alert('Игра окончена')
    return 'Игра окончена';
  }
}

}
console.log(guessNumber()) 


