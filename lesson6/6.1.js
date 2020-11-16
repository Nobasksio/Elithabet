function User(firstName, lastName, regDate) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.regDate = new Date;

  this.getFullName = function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.regDate;
  }
}

function UserList(User) {
  this.users = [];
  this.users.add = function(User) {
    this.users.push(user);
  }

  this.getAllUsers = function() {
    return this.users.join('\r\n');;
  }
}
var userList = new UserList();
userList.toString();
do {

  var customer = prompt('Введите имя и фамилию');

  if (customer === null) break;
  if (customer == '') break;

  var a = customer.split(' ');

  var user = new User(a[0], a[1]);

  User.prototype.toString = function() {
    return this.firstName + ' ' + this.lastName + ' ' + this.regDate;
  }

  user.toString();
  userList.users.push(user);

} while (customer !== null);
alert ('Новых пользователей больше сегодня не будет, хватит');

//console.log(userList.getAllUsers());
alert(userList.getAllUsers());
