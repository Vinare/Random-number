'use strict'

let randomNum = Math.floor(Math.random() * 100) + 1

function guessNumber() {
  let userNum = prompt('Угадай число от 1 до 100') 
  
  if (isNaN(userNum) || userNum == "") {
    alert('Можно вводить только числа')
    guessNumber()
  
  } else if (userNum == null) {
    alert('Игра окончена')
  
  } else if (!isNaN(parseFloat(userNum)) && isFinite(userNum)) {
    userNum = +userNum
  
    if (userNum > randomNum) {
    alert('Загаданное число меньше')
    guessNumber()  
  
  } else if (userNum < randomNum) {
    alert('Загаданное число больше')
    guessNumber()
  
  } else if (userNum === randomNum) {
    alert('Поздравляю, Вы угадали!!!')
  }
}}
console.log(guessNumber()) 


