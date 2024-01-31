import React, { Component } from 'react';
import Post from './Post';

class Blog extends Component {
    render() {
      const posts = this.props.posts.map((item, index) => {
        return  <Post key={index} title={item.title} disc={item.disc} postBody={item.postBody} date={item.date} author={item.author} />
      }) 
        return (
            <div>
               {posts}
            </div>
        );
    }
}

export default Blog;