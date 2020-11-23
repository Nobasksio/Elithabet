// function showArgs() {
//   console.log('Передано аргументов: ' + arguments.length);
// console.log(arguments[0]);
// console.log(arguments[1]);
// console.log(arguments.constructor.name);
// console.log([1,2,3].constructor.name);
// let args = Array.prototype.slice.call(arguments)
// return args.join(', ')
// }
// console.log( showArgs('foo', 'bar', 'array'));
//
// function sayHello(name) {
//   alert ('Привет, '+ name);
// }
// setTimeout(sayHello, 1000, 'Егор');
//
// setTimeout(function (){
//   alert ('прошла секнда')
// }, 1000);
//
//
// let car = {
//   sayHello: function() {
//     console.log('Поехали');
//   },
//   start: function() {
//     console.log('Заводимся...');
//     setTimeout(this.sayHello, () {
//       this.sayHello();
//     }, 1000);
//   }
// };
// car.start();


//eval
// let car = {
//   sayHello: function() {
//     console.log('Поехали');
//   },
//   start: function() {
//     console.log('Заводимся...');
//     let self = this;
//     setTimeout(function () {
//       self.sayHello();
//     }, 1000);
//   }
// };
// car.start();
//
// function test() {
//   let a = 1;
// eval('var b = a + 1');
// return b;
// }
// console.log(test());
//

//захват ошибок
// let str = prompt('Введите JSON')
// try {
// var json = json.parse(str);
// }
// catch (ex) {
//
//   console.log('некорр');
// }
// console.log(json);

// function calcbirthYear() {
// let age = prompt('Введте ваш возраст');
// let birthYear = new Date().getFullYear() - age;
// if (isNaN(birthYear)) {
//   throw('Введено не число');
// }
// else if (age !== null) {
//   alert('Ваш год оождения' + birthYear);
// }
// }
//
// try {
//   calcbirthYear();
//
// }
// catch(ex) {
//   alert('ошибка' + ex);
// }


//регулярные выражения
// var phone = prompt('Введите номер телефона в формате ххх-хх-хх');
// let isvalidphone = /\d{3}-\d{2}-\d{2}/.test(phone);
// if (isvalidphone) {
//   alert ('Thanks');
// }
// else {
//   alert('Error');
// }
