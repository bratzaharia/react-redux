import React, { Component } from 'react'

class Posts extends Component {
    state = {
      posts: [],
      images: []
    }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({posts: data}))

    // fetch('https://jsonplaceholder.typicode.com/photos')
    //   .then(res => res.json())
    //   .then(data => this.setState({images: data}))
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id} className="postItem">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}
export default Posts