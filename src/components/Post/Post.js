import React from 'react';
import classes from './Post.css';

const post = () => {
	return (
		<div className={classes.Post}>
			<div className={classes.Block}>
				<h1>Title</h1>
				<h2>Author</h2>
			</div>
		</div>
	);
};

export default post;
