'use strict'

// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//
// }

// function getname(){
//   console.log(this);
//
// }

//  function getFullName(prefix, suffix) {
//   //console.log(this);
//   return prefix
//   + ', '
//   + this.firstName
//   + ' '
//   + this.lastName
//   + suffix;
// }
//
// var myUser = new User('Егор', 'Яковишен');

// getname();

var a = {
  name: 'foo',
  getName: function() {
    return this.name
  }
};
var b= {
  name: 'bar',
  getName: a.getName.bind(a)
}
