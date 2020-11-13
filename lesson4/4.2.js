let users = [];
users[0] = {
  name: 'Елизавета',
  login: '123El',
  password: '321El',
},
users[1] = {
  name: 'Анна',
  login: '123El',
  password: '321An',
},
users[2] = {
  name: 'Артур',
  login: '123Ar',
  password: '321Ar',
},
users[3] = {
  name: 'Иван',
  login: '123Iv',
  password: '321Iv',
},
users[4] = {
  name: 'Ефросинья',
  login: '123Ef',
  password: '321Ef',
}

let userLog;
let userPass;

do {
  userLog = prompt ('Введите логин');
  userPass = prompt ('Введите пароль');

var signLog = users.findIndex(index => index.login == userLog);
var signPass = users.findIndex(index => index.password == userPass);

if ((signLog == -1) || (signPass == -1) || (signLog !== signPass)) {
  alert ('Логин и/или пароль неверный. Попробуйте ещё')
}
} while ((signLog == -1) || (signPass == -1) || (signLog !== signPass));

alert ('Приветствую тебя, ' + users[signLog].name + '!');
