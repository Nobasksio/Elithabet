window.addEventListener('load', function() {

	i =	localStorage.length;

	if (i !== undefined && i !== 0){
		let h = Object.keys(localStorage);
		let j = Math.max.apply(null, h);
		let a = document.querySelector('#paper');
		document.getElementById('paper').innerHTML = localStorage.getItem(j);
	}
	else {
		i = 0;
	}

	document.querySelector('#edit').addEventListener('click', function(){

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
	document.querySelector('#save').addEventListener('click', function(){
		paper.setAttribute('contenteditable', 'false');
		cancel.setAttribute('disabled', 'disabled');
		save.setAttribute('disabled', 'disabled');
		edit.removeAttribute('disabled', 'disabled');

		// заполнение селекта
		i = +i + 1;
		let d = new Date;
		let date = d.getDate() + '.' + (d.getMonth() + 1) + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
		b = i + '. ' + date;
		let newSelect = document.createElement('option');
		document.querySelector('form.form > select.select').appendChild(newSelect);
		newSelect.classList.add('option');
		newSelect.innerHTML = b;
		newSelect.id = i;

		localStorage.setItem(i, document.getElementById('paper').innerHTML);

		// вызов сохранённой копии
		let selectItems = document.querySelectorAll('.option');
		let clear = document.querySelector('#clear');
		let index;
		let option2;

		for (index = 0; index < selectItems.length; index++) {
			option2 = selectItems[index];
		}
		option2.addEventListener('click', function(event) {
			let c = this.id;
			document.getElementById('paper').innerHTML = localStorage.getItem(c) ;

		// удаление сохранённой копии в селект и в локал сторадж

		});
		option2.addEventListener('click', function(event) {
			var c = this.id;
			clear.addEventListener('click', function(event) {

				document.getElementById('paper').innerHTML = localStorage.removeItem(c);

				let opt = document.getElementById(c);
				opt.remove(c);
// Uncaught TypeError: Cannot read property 'remove' of null
//   at HTMLInputElement.<anonymous> (script.js:76)
// работает нормально НО не всегда. Может на первом элементе вылезти ошибка 
// и начать удалять что попало в любых количествах. 
// а может пройти всё гладко и просто в консоли будет вылезать ошибка, но
// ни на что влиять не будет.
// Нашла, что про эту ошибку пишут, мол, с Child не идёт. Child я убрала, 
// но толку всё равно маловато. Вот. Что это и что с этим делают? 
// как ещё безгеморройно можно удалять элементы? 
				let h = Object.keys(localStorage);
				let j = Math.max.apply(null, h);

				document.getElementById('paper').innerHTML = localStorage.getItem(j);

			});

		})
	})

	// нажатие на "отмена"
	document.querySelector('#cancel').addEventListener('click', function(){
		paper.setAttribute('contenteditable', 'false');
		cancel.setAttribute('disabled', 'disabled');
		save.setAttribute('disabled', 'disabled');
		edit.removeAttribute('disabled', 'disabled');

		document.getElementById('paper').innerHTML = localStorage.getItem(i);

	})
})
