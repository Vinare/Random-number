'use strict'

let attempts = 5;

function guessNumberGlobal() {
let randomNum = Math.floor(Math.random() * 100) + 1

function guessNumber(attemptsIndex) {
  let userNum = prompt('Угадай число от 1 до 100') 

  if (isNaN(userNum) || userNum == "") {
    alert('Можно вводить только числа')
    guessNumber()
  
  } if (userNum == null) {
    alert('Игра окончена')
  
  } if (!isNaN(parseFloat(userNum)) && isFinite(userNum)) {
    userNum = +userNum

    if (attemptsIndex > 1) {
  
    if (userNum > randomNum) {
    attemptsIndex--;
    alert('Загаданное число меньше. У Вас осталось ' + attemptsIndex + ' попыток')
    guessNumber(attemptsIndex)  
  
  } if (userNum < randomNum) {
    attemptsIndex--;
    alert('Загаданное число больше. У Вас осталось ' + attemptsIndex + ' попыток')
    guessNumber(attemptsIndex)
  } 
   if (userNum === randomNum) {
    let con = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
  
   if (con == true) { 
   guessNumberGlobal()
  } else {
    alert('Игра окончена')
  }
  }
  } if (attemptsIndex == 1) { 
    let con = confirm('Попытки закончились, хотите сыграть еще?')

    if (con == true) { 
    guessNumberGlobal() 
  } else {
    alert('Игра окончена')
  }
  }
}
}
console.log(guessNumber(attempts)) 
}
console.log(guessNumberGlobal())


