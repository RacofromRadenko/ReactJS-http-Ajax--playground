import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import classes from './Blog';

class Blog extends Component {
	render() {
		return (
			<section className={classes.Post}>
				<Post />
				<Post />
				<Post />
			</section>
		);
	}
}

export default Blog;
