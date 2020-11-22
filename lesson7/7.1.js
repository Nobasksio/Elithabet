
function Transport (model, sound) {
  this.model = model;
  this.sound = sound;
  let getFullName = function() {
    return  this.model + ' ' + this.sound;
  }
}

function Airplane (model, sound) {
  Transport.apply(this, arguments);
  this.saySound = function () {
    alert ('Самолёт ' + this.model + ' говорит ' + this.sound);
  }
  this.changeModel = function(newModel) {
    this.model = newModel;
  }
}

function Car (model, sound) {
  Transport.apply(this, arguments);
  this.saySound = function () {
    alert ('Машина говорит ' + this.model + ' говорит ' + this.sound);
  }
  this.changeModel = function(newModel) {
    this.model = newModel;
  }
}

function Train (model, sound) {
  Transport.apply(this, arguments);
  this.changeSound = function(newSound) {
    this.sound = newSound;
  }
  this.saySound = function () {
    alert ('В сказке про паровозик поезд говорил ' + this.sound);
  }
}

let a = new Airplane('Як-40', 'ууу');
let b = new Train('Siemens', 'чух-чух');
let c = new Car('BMW X5', 'бип-бип');

console.log(b);
b.saySound();
b.changeSound('чу-чух-чу-чух. Ту-туууу');
console.log(b);
b.saySound();

console.log(a);
a.saySound();
a.changeModel('Як-42');
console.log(a);
a.saySound();
