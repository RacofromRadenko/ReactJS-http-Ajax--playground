import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import classes from './Blog.css';

import asyncComponent from '../../hoc/asyncComponents';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost/NewPost');
});

class Blog extends Component {
	state = {
		auth: false
	};

	render() {
		return (
			<div className={classes.Blog}>
				<header>
					<nav>
						<ul>
							<li>
								<NavLink to="/posts/" exact activeClassName="my-active">
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to={{
										pathname: '/new-post',
										hash: '#submit',
										search: '?quick-submit=true'
									}}
								>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				<Switch>
					{this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
					<Route path="/posts" component={Posts} />
					<Route render={() => <h1 style={{ textAlign: 'center' }}>Not found!!!</h1>} />

					{/* <Redirect from="/" to="/posts" /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;
