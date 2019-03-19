import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

export default class Trips extends Component {
	render() {
		return <div>{this.props.trips.map((post) => <Post post={post} />)}</div>;
	}
}
