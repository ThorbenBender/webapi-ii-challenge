import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
	render() {
		return (
			<div>
				<p>{this.props.post.title}</p>
				<p>{this.props.post.contents}</p>
				<p>{this.props.post.created_at}</p>
				<p>{this.props.post.updated_at}</p>
			</div>
		);
	}
}
