
// забор значений из названи и описания. присваивание им переменных
document.querySelector('#button1').addEventListener('click', function(){

  let a = document.querySelector('#title').value;
  document.querySelector('#title').value = ''
  let b = document.querySelector('#description').value;
  document.querySelector('#description').value = '';
  console.log(a,b);

  // создание новой строки нумерованного списка из новых переменных,
  let newLi = document.createElement('li');
  newLi.innerText = a;
  document.querySelector('div.fixed-leftColumn > ol.marker').appendChild(newLi);
  newLi.classList.add('markerTitle');

  //создание крестика для удаления
  let newBtn = document.createElement('input');
  newBtn.type = 'button';
  newBtn.value = "x";
  document.querySelector('ol.marker > li:last-child').appendChild(newBtn);
  newBtn.classList.add('markerClear');

  //создание описания
  let newDiv = document.createElement('div');
  newDiv.innerText = b;
  document.querySelector('ol.marker > li:last-child').appendChild(newDiv);
  newDiv.classList.add('newDescription');

  //валидация формы
  if (a === '' || b === '') {
    newLi.remove();
    newDiv.remove();
    newBtn.remove();
    confirm ('Оба поля обязательны для заполнения, мой друг')
  }
  else {
    // удаление блока "список пуст"
    let emptySlot = document.querySelector('.emptySlot');
    if (emptySlot !== null) {
      emptySlot.remove();
    }
  }


  let buttonItems = document.querySelectorAll('.markerClear');
  let index;
  let button2;

  for (index = 0; index < buttonItems.length; index++) {
    button2 = buttonItems[index];
    button2.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('click');
      this.parentNode.remove();
    });
  }
})
