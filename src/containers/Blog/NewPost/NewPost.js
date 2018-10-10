import React, { Component } from 'react';
import axios from 'axios';

import classes from './NewPost.css';

class NewPost extends Component {
	state = {
		title: '',
		content: '',
		author: 'Max'
	};

	addNewPostHandler = () => {
		const newPost = {
			title: this.state.title,
			content: this.state.content,
			author: this.state.author
		};

		axios.post('/posts', newPost).then((response) => {
			console.log(response);
		});
	};

	render() {
		return (
			<div className={classes.NewPost}>
				<h1>Add a Post</h1>
				<h5>Title</h5>
				<input
					type="text"
					value={this.state.title}
					onChange={(event) => this.setState({ title: event.target.value })}
				/>
				<h4>Content</h4>
				<textarea
					rows="4"
					cols="50"
					value={this.state.content}
					onChange={(event) => this.setState({ content: event.target.value })}
				/>
				<h4>Author</h4>
				<select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
					<option value="Max">Max</option>
					<option value="Manu">Manu</option>
				</select>
				<button onClick={this.addNewPostHandler}>Add Post</button>
			</div>
		);
	}
}

export default NewPost;
