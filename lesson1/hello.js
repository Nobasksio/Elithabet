var myName = prompt('Как Вас зовут?');
var myLastName = prompt('Также, пожалуйста, укажите фамилию');
var myBirthYear =  prompt('Введите Ваш год рождения');

var  currentYear = 2020;
var age = currentYear - myBirthYear;

if (age < 20) {
  alert('Привет, ' + myName + ' ' + myLastName +'!' +  ' ' + "\u{1F44B}");
}
else if (age >=20 && age <40) {
  alert('Добрый день, ' + myName  + ' ' + myLastName + ' ' + "\u{1F590}");
}
else {
  alert('Здравствуйте, ' + myName + ' ' + myLastName + ' ' +  "\u{1F590}")
}
