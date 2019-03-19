import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
	state = {
		posts: []
	};
	componentDidMount() {}
	fetchPosts = () => {
		axios
			.get('http://localhost:4000/api/posts')
			.then((posts) => {
				this.setState({ posts });
			})
			.catch((err) => {
				window.alert(err);
			});
	};
	render() {
		return (
			<div className='App'>
				<Route exact path='/posts' render={(props) => <Trips {...props} posts={this.state.posts} />} />
				<Route exact path='/posts/add-posts' render={(props) => <AddPostForm {...props} />} />
				{this.state.posts.map((post, idx, ...props) => (
					<Route exact path={`/posts/${post.id}`} render={() => <Post />} />
				))}
				<Route exact path='/posts/edit-trips' render={(props) => <EditPostForm {...props} />} />
				{this.state.posts.map((post, idx, ...props) => (
					<Route exact path={`/posts/${post.id}`} render={() => <Post />} />
				))}
			</div>
		);
	}
}

export default App;
