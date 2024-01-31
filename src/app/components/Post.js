import React, { Component } from "react";

class Post extends Component {
	render() {
		return (
			<div className="post">
				<h1>{this.props.title}</h1>
				<h4>{this.props.disc}</h4>
				<p>{this.props.postBody}</p>
				<div className="whoIs">
					<p className="date">{this.props.date}</p>
					<p className="author">{this.props.author}</p>
				</div>
			</div>
		);
	}
}

export default Post;
