import React, { Component } from 'react';
import axios from 'axios';

import classes from './FullPost.css';

class FullPost extends Component {
	state = {
		loadedPost: null
	};

	componentDidMount() {
		console.log(this.props);
		if (this.props.match.params.id) {
			if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
				axios.get('/posts/' + this.props.match.params.id).then((response) => {
					console.log(response);
					this.setState({ loadedPost: response.data });
				});
			}
		}
	}

	deletePostHandler = () => {
		const data = {
			title: this.state.loadedPost.title,
			id: this.state.loadedPost.id
		};
		axios.delete('/posts/' + this.props.id, data).then((response) => {
			console.log(response);
		});
	};

	render() {
		let post = <p style={{ textAlign: 'center' }}>Please select a Post! </p>;

		if (this.props.id) {
			post = <p style={{ textAlign: 'center' }}>Loading...!!! </p>;
		}

		if (this.state.loadedPost) {
			post = (
				<div className={classes.FullPost}>
					<h1>{this.state.loadedPost.title}</h1>
					<h3>{this.state.loadedPost.body}</h3>
					<button onClick={this.deletePostHandler}>Delete</button>
				</div>
			);
		}

		return post;
	}
}

export default FullPost;
