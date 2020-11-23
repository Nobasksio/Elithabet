'use strict';
try {
  function input() {
    let code = prompt('Введи код js');
    let result = eval(code);
    return code;
  }
  input();
}

catch(ex) {
  alert ('Такой себе код введён, конечно. Проблема тут вот какая: ' + ex.massage);
}
