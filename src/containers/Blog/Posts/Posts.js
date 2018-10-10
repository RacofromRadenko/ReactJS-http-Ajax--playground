import React, { Component } from 'react';
import Post from '../../../components/Post/Post';
import axios from '../../../axios';
import classes from './Posts.css';

class Posts extends Component {
	state = {
		posts: [],
		selectedPostID: null
	};

	componentDidMount() {
		axios
			.get('/posts')
			.then((result) => {
				const posts = result.data.slice(0, 4);
				const updatedPosts = posts.map((post) => {
					return {
						...post,
						author: 'Max'
					};
				});
				this.setState({
					posts: updatedPosts
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	selectPostHandler = (id) => {
		this.props.history.push({ pathname: '/' + id });
	};

	render() {
		const post = this.state.posts.map((post) => {
			return (
				<Post
					title={post.title}
					key={post.id}
					author={post.author}
					clicked={() => this.selectPostHandler(post.id)}
				/>
			);
		});

		return <section className={classes.Posts}>{post}</section>;
	}
}

export default Posts;
