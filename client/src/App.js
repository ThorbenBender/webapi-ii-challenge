import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Posts from './component/Posts';
import Post from './component/Post';
import $ from 'jquery';
import PostAddForm from './component/PostAddForm';

class App extends React.Component {
	state = {
		posts: []
	};
	componentDidMount() {
		this.fetchPosts();
	}
	fetchPosts = () => {
		axios
			.get('http://localhost:4000/api/posts')
			.then((posts) => {
				console.log(posts);
				this.setState({ posts: posts.data });
			})
			.catch((err) => {
				window.alert(err);
			});
	};
	render() {
		return (
			<div className='App'>
				<Route exact path='/posts' render={(props) => <Posts {...props} posts={this.state.posts} />} />
				<Route exact path='/posts/add-posts' render={(props) => <PostAddForm {...props} />} />
				{this.state.posts.map((post, idx, ...props) => (
					<Route exact path={`/posts/${post.id}`} render={() => <Post />} />
				))}
				{/* <Route exact path='/posts/edit-trips' render={(props) => <PostEditForm {...props} />} />
				{this.state.posts.map((post, idx, ...props) => (
					<Route exact path={`/posts/${post.id}`} render={() => <Post />} />
				))} */}
			</div>
		);
	}
}

export default App;
