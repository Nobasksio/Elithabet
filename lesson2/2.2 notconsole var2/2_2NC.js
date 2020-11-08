var yearOne = prompt (' Введите начальный год '); {

 while (isNaN(yearOne)) {
  yearOne = prompt (' Ну, год же. Это из цифр надо. Попробуйте ещe разок. ');
 }
}
var trashOne = yearOne % 4 - 4;
var newYearOne = +yearOne - +trashOne;
var forTheSame = yearOne % 4;

var yearTwo = prompt (' Введите конечный год '); {

 while (isNaN(yearTwo)) {
  yearTwo = prompt (' Ну, год же. Это из цифр надо. Попробуйте ещe разок. ');
 }
}
var trashTwo = yearTwo % 4 - 4;
var newYearTwo = +yearTwo - +trashTwo;


 if ( yearOne < yearTwo ) {
   while ( newYearOne <= yearTwo ) {
     alert ( newYearOne );
    newYearOne = +newYearOne + +4;
   }
 }

  else if ( yearOne > yearTwo ) {
    while ( newYearTwo <= yearOne ) {
      alert (newYearTwo);
      newYearTwo = +newYearTwo + +4;
    }
   }
  else if ( yearOne == yearTwo ) {
    if ( forTheSame != 0 ) {
        alert (' В выбранном промежутке високосных не было :( ');
      }
      else {
        alert ( yearOne );
      }
  }
//else if ( yearOne - yearTwo == 2 ||  yearOne - yearTwo == -2) {
//    alert (' В выбранном промежутке високосных не было :( ')
//  }

// я так и не придумала как сделать, чтобы работали те заданные числа,
// между которыми бы не было високосных и их разница не превышала 2. 5 и 7,
// 9 и 11 и тд
// Потом загуглила коды по этой задаче, они, конечно, лаконичне. Что скажешь?
// Как можно было сократить и что поделать с этими годами?
  else {
    alert (' Что-то пошло не так :( )');
  }
