import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';

import classes from './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		selectedPostID: null
	};

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((result) => {
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
		});
	}

	selectPostHandler = (id) => {
		this.setState({ selectedPostID: id });
	};

	render() {
		const post = this.state.posts.map((post) => {
			return <Post title={post.title} key={post.id} clicked={() => this.selectPostHandler(post.id)} />;
		});

		return (
			<div>
				<section className={classes.Posts}>{post}</section>
				<section>
					<FullPost id={this.state.selectedPostID} />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		);
	}
}

export default Blog;
