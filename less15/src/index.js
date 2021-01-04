import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '', name: '', text: '', date: '', comments : []
		}
	}

	componentDidMount(){
		if (localStorage.getItem('comments') !== undefined && localStorage.getItem('comments') !== null) {
			this.setState({
				comments : JSON.parse(localStorage.getItem('comments'))
			});
		}
	}


	upDateInput(key, value) {
		this.setState({
			[key] : value
		})
	};

	addComment(key) {
		let d = new Date;
		let date = d.getDate() + '.' + (d.getMonth() + 1) + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

		if (this.state.name !== '' && this.state.text !== '') {
			const newComment = {
				id : key,
				value : {
					name : this.state.name,
					text : this.state.text,
					date : date
				}
			};
			this.setState({
				id : newComment.id,
				name: '',
				text : '',
				comments : [...this.state.comments, newComment]
			},
			localStorage.setItem('comments', JSON.stringify([...this.state.comments, newComment])),

		);
	}
	else {
		alert('Конечно, не надо использовать алерт, но это же не главное. Главной задачей было реализвать валидацию, правда же? :)')
	}

};
deleteComm(key) {
	const deleteComm = this.state.comments.map((comment, i) => {
		if (key === i) {

			this.state.comments.splice(i, 1)
		}
		else {
			return comment;
		}
	}
)
this.setState({
	id : key,
	name: '',
	text : '',
	comments : [...this.state.comments]
})
localStorage.setItem('comments', JSON.stringify(this.state.comments));
};
render() {
	return (
		<div className='app'>
		<h1 className='title'>Комментарии</h1>
		<div className='commentContainer'>
		<textarea type='text'
		placeholder='Ваше имя'
		сlassName='name'
		value={this.state.name}
		onChange={(changeText) => this.upDateInput(
			'name', changeText.target.value
		)}
		></textarea>
		<textarea type='text'
		placeholder='Что скажете о 2020?'
		className='text'
		value={this.state.text}
		onChange={(changeText) => this.upDateInput(
			'text', changeText.target.value
		)}
		></textarea>
		<input type='button'
		value='Отправить'
		className='send'
		onClick= {()=> this.addComment.bind(this)()}
		/>
		<div>
		{this.state.comments.map((comment, i) => {
			return (
				<div key={i}
				index={i}
				className={'comment'}>

				<div className={'nameComm'}>{comment.value.name}</div>
				<div className={'textComm'}>{comment.value.text}</div>
				<div className={'dateComm'}>{comment.value.date}</div>

				<input type='button'
				value='Удалить'
				className={'deleteComm'}
				onClick={ () => this.deleteComm.bind(this, i)()}
				></input>
				</div>
			)
		}
	)
}
</div>
</div>
</div>
) // заколебалась я исправлять эти дивы, чтобы по порядку табы ставились,
// в конце концов плюнула. Редактор как исправляет - так и вот есть.
// ещё у меня проблемы с переносом строк по надатию энтера
// на новую строку после рендеринга.
}
}







ReactDOM.render(
	<Comment />,
	document.querySelector('#a')
)
