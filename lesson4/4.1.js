// вот тут комментарий мой
let d = new Date;
let month = d.getMonth();
let c = month + 1;
let hours = d.getHours();
let hoursText;
let min = d.getMinutes();
let minText;
let sec = d.getSeconds();
let secText;
let names = [
  'января', 'февраля',
  'марта', 'апреля', 'мая',
  'июня', 'июля', 'августа',
  'сентября', 'октября', 'ноября',
  'декабря'
];

if ((hours === 1) || (hours === 21)) {
  hoursText = 'час';
}
else if (((hours >= 2) && ((hours <= 4)) || ((hours >= 22) && (hours <= 23)))) {
  hoursText = 'часа';
}
else if (hours > 4 && hours <= 20) {
  hoursText = 'часов';
}
else {
  hoursText = 'часов'
}

if (min.toString().slice(-1) == 1) {
  minText = 'минута';
}
else if ((min.toString().slice(-1) >= 2 && min.toString().slice(-1) <= 4)) {
  minText = 'минуты';
}
else {
  minText = 'минут';
}

if (sec.toString().slice(-1) == 1) {
  secText = 'секунда';
}
else if ((sec.toString().slice(-1) >= 2) && (sec.toString().slice(-1) <= 4)) {
  secText = 'секунды';
}
else {
  secText = 'секунд';
}

let dateText = ('Сейчас ' + d.getDate() + ' ' + names.slice(month, c) + ' ' + d.getFullYear() + ' года ');
let timeText = (hours + ' ' + hoursText + ' ' + min + ' ' + minText + ' ' + sec + ' ' + secText);
alert (dateText + timeText);


// let timer = setInterval(() => console.log(dateText + timeText), 1000);
// setTimeout(() => {clearInterval(timer); console.log(dateText + timeText); }, 999);
// ничего не поняла про таймер, но это задание со звёздочкой, типа для продвинутых)
// Не моё пока задание) Поэтому я ещё почитаю про таймеры.
