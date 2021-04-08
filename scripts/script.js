"use strict";

function game() {
  let hiddenNumber = parseInt(Math.random() * 100 + 1);
  console.log("hiddenNumber: ", hiddenNumber);

  let guess = function () {
    let userAnswer = prompt("Угадай число от 1 до 100");
    console.log("userAnswer: ", userAnswer);
    if (userAnswer == null) {
      alert("Игра окончена");
      return;
    }

    if (userAnswer > 100 || userAnswer < 1) {
      alert("Введи число от 1 до 100!");
      return guess();
    }

    if (userAnswer == hiddenNumber) {
      alert("Поздравляю, Вы угадали!!!");
      return;
    } else if (userAnswer > hiddenNumber) {
      alert("Загаданное число меньше. Попробуй еще");
    } else if (userAnswer < hiddenNumber) {
      alert("Загаданное число больше. Попробуй еще");
    }
    return guess();
  };
  guess();
}

game();
