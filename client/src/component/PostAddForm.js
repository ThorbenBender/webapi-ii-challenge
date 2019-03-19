import React from 'react';
import Axios from 'axios';

export default class PostAddForm extends React.Component {
	state = {
		title: '',
		contents: ''
	};

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addPost = (post) => {
		Axios.post('http://localhost:4000/api/posts', { headers: { 'Content-Type': 'application/json' }, post })
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<input type='text' name='title' placeholder='Title' onChange={this.onChangeHandler} />
				<input type='text' name='title' placeholder='Title' onChange={this.onChangeHandler} />
				<button onClick={() => this.addPost(this.state)}>Add Post</button>
			</div>
		);
	}
}
