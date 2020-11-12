var numberOne = prompt (' Введите первое число ');{

while (isNaN(numberOne)) {
  numberOne = prompt (' Надо ввести число, а Вы что ввели? Попробуйте ещe разок ');
}
}
var numberTwo = prompt (' Введите второе число ');

  while (isNaN(numberTwo)) {
    numberTwo = prompt (' Надо снова ввести число, а Вы что ввели? Попробуйте ещe разок ');
  }
if (numberOne > numberTwo) {
  alert (' Ого! Первое число больше второго: ' + numberOne + ' > ' + numberTwo );
}
 else if (numberOne < numberTwo) {
   alert (' Вот это да! Второе число больше первого: ' + numberOne + ' < ' + numberTwo )
    }
  else {
    alert (' Красота! Числа равны: ' + numberOne + ' = ' + numberTwo );
  }
