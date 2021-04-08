"use strict";
let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let getHiddenNumber = function () {
  return parseInt(Math.random() * 100 + 1);
};
let getUserNumber = function () {
  let userAnswer = prompt("Угадай число от 1 до 100");
  if (userAnswer == null) return userAnswer;
  if (
    !isNumber(userAnswer) ||
    parseFloat(userAnswer) > 100 ||
    parseFloat(userAnswer) < 1
  ) {
    confirm("Введи число от 1 до 100!");
    getUserNumber();
  }
  return userAnswer;
};

function game() {
  let hiddenNumber = getHiddenNumber();
  //console.log("hiddenNumber: ", hiddenNumber);
  let guess = function () {
    let userNumber = getUserNumber();
    //console.log("userNumber: ", userNumber);
    if (userNumber === null) {
      alert("Игра окончена");
      return;
    }

    if (userNumber == hiddenNumber) {
      alert("Поздравляю, Вы угадали!!!");
      return;
    }

    if (userNumber > hiddenNumber) {
      alert("Загаданное число меньше. Попробуй еще");
    } else if (userNumber < hiddenNumber) {
      alert("Загаданное число больше. Попробуй еще");
    }
    guess();
  };
  guess();
}

game();
