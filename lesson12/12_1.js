window.addEventListener('load', () => {

  let i =	localStorage.length;
  
  // загрузка последней сохранённой копии (если есть)
  if (i !== undefined && i !== 0){
    let keysArray = Object.keys(localStorage);
    //maxKey = Math.max(...[keysArray]); не работает
    let maxKey = Math.max.apply(null, keysArray);
    document.getElementById('paper').innerHTML = localStorage.getItem(maxKey);

    // вызов последнего сохранения в селект
    let loadSelect = maxKey + '. ' + 'Последняя сохранёнка';
    let select = document.getElementById('select');
    select.innerHTML += `<option value='${maxKey}' id='${maxKey}' class="option">${loadSelect}</option>`;
  }
  else {
    i = 0;
  }
  //нажатие на редактировать
  document.querySelector('#edit').addEventListener('click', () => {

    // поле становится доступным для редактирования
    let paper = document.querySelector('#paper');
    paper.setAttribute('contenteditable', 'true');

    // кнопки "сохранить" и "отменить" становятся активными
    let save = document.querySelector('#save');
    save.removeAttribute('disabled', 'disabled');

    let cancel = document.querySelector('#cancel');
    cancel.removeAttribute('disabled', 'disabled');

    //редактировать недоступна
    let edit = document.querySelector('#edit');
    edit.setAttribute('disabled', 'disabled');
  })

  //нажатие на "сохранить"
  document.querySelector('#save').addEventListener('click', () => {
    paper.setAttribute('contenteditable', 'false');
    cancel.setAttribute('disabled', 'disabled');
    save.setAttribute('disabled', 'disabled');
    edit.removeAttribute('disabled', 'disabled');

    // заполнение селекта
    let keysArray = Object.keys(localStorage);
    let maxKey = Math.max.apply(null, keysArray);
    i = +maxKey + 1;
    let d = new Date;
    let date = d.getDate() + '.' + (d.getMonth() + 1) + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    let selectTitle = i + '. ' + date;
    let select = document.getElementById('select');
    select.innerHTML += `<option value='${i}' id='${i}' class="option">${selectTitle}</option>`;
    localStorage.setItem(i, document.getElementById('paper').innerHTML);

  })

  // нажатие на "отмена"
  document.querySelector('#cancel').addEventListener('click', () => {
    paper.setAttribute('contenteditable', 'false');
    cancel.setAttribute('disabled', 'disabled');
    save.setAttribute('disabled', 'disabled');
    edit.removeAttribute('disabled', 'disabled');

    document.getElementById('paper').innerHTML = localStorage.getItem(i);
  })

  // выбор значения из списка
  let select = document.querySelector('select');
  select.addEventListener('change', () => {
    let clickSelect = select.value;
    document.getElementById('paper').innerHTML = localStorage.getItem(clickSelect);
  });


  // удаление сохранённой копии в селект и в локал сторадж
  let clear = document.querySelector('#clear');
  clear.addEventListener('click', (event) => {
    let clickSelect = select.value;

    document.getElementById('paper').innerHTML = localStorage.removeItem(clickSelect);

    let optionElement = document.getElementById(clickSelect);
    optionElement.remove(clickSelect);

    keysArray = Object.keys(localStorage);
    maxKey = Math.max.apply(null, keysArray);

    document.getElementById('paper').innerHTML = localStorage.getItem(maxKey);


  })
})
