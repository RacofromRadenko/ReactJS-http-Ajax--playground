import React from 'react';
import classes from './Post.css';

const post = (props) => {
	return (
		<article className={classes.Post} onClick={props.clicked}>
			<h1>{props.title}</h1>
			<div>
				<h6 className={classes.Author}>{props.author}</h6>
			</div>
		</article>
	);
};

export default post;
