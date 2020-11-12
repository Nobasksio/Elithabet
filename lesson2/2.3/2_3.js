for ( i = 0 ; ;) {
var number = prompt (' Введите число '); {
while (isNaN(number)) {
  number = prompt (' Может уже начнём вводить числа? ')
}
}
    i = i + +number;
    if (!number) break;
}
alert (' Надоело? Сумма - ' + i);
