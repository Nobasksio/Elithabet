do{
alert (' Привет, я загадала число, угадаешь? Подсказка: загаданное число в больше 0 и меньше 10. Удачи!' );

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

getRandomInt(0, 10)
//console.log(getRandomInt(0, 10)); //Вот это значение

let b = getRandomInt(0, 10); // И это отличаются.
console.log(b);
let a = prompt ('Твой вариант?');
console.log(a);




while (+a !== +b) {{
  if (isNaN(a)) {
    a = prompt ('В цифры игра! А не в буквы!');
  }
  else if (a > 10 || a < 0) {
    a = prompt ('Ну же, от 0 д 10!');
  }


  else if (+a > +b) {
    console.log(a);
    console.log(b);
    console.log(a > b);
    a = prompt ('Чуточку меньше!');
  }
  else if (+a < +b) {
    console.log(a);
    console.log(b);
    console.log(a < b);
    a = prompt ('Маленько побольше!');
  }
}

if (a === null) break;
//else {
  //
}
//}
 if (a == b) {
   alert ('Угадал! Ты - самый умный человек в мире! Моё число: ' + b);
   alert ('До встречи');
}
else {
  alert ('Была рада поиграть с тобой. До встречи!');
}
alert (' Но в задании сказано играть ещё... не противься')
}
while (true);
