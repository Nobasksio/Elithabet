function User(firstName, lastName, regDate) { //создаю функцию конструктор объекта, с 3 праметрами/аршументами
  // для экземпляров объектов
  // для создания однотипных объектов с разным значениями

  this.firstName = firstName; // задаю значения свойств конструруемого объекта
  this.lastName = lastName;
  this.regDate = new Date;

  this.getFullName = function() { //метод для всех пользователей, возвращает нужные данные
    return this.firstName + ' ' + this.lastName + ' ' + this.regDate; //имя, фамилия. дата регистрации
  }// this указывает на User, созданный и возвращённый конструктором
}

function UserList(User) { //создаю функцию конструктор
  this.users = []; // массив, в котором хранятся все пользователи, котрые регистрируются
  this.users.add = function(User) { //метод, добавляет в свой массив списка пользователей
    // парамеры User
    this.users.push(user);
}

  this.getAllUsers = function() { // возвращает полтзователей, которые зарегистрировались -
    //попали во внутренний массив userlist
  return this.users;
  }
}
var userList = new UserList();
// 1. создаётся новый экземпляр userlist  - пустой
do {
var customer = prompt('Введите имя и фамилию').split(' '); // 2. регистрация
var user = new User(customer[0], customer[1]); // новый экзмемпляр на основании конструктора
//в функции создаётся пустой объект this, он наследует прототип(?), ему назначаются свойства
// ДОЛЖНЫ ПЕРЕДАВАТЬСЯ ЗНАЧЕНИЯ СВОЙСТВ. в этот моент конструируется User и ппадает
//в переменную user
//записываются фёстнэйм, ластнэйм, регдэйт.
//3. Ок? Введи ещё, пока не нажмёт отмена.
// 4. Отмена? Консоль лог - гет олл юзерс имя, фамилия, дата рег
userList.users.push(user);
var cancel = confirm('Ещё пользователя?')
console.log(user.getFullName());
} while (cancel == true);
alert ('Новых пользователей больше сегодня не будет, хватит');

console.log(userList.getAllUsers());
