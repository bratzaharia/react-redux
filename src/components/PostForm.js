import React, { Component } from 'react'

export default class PostForm extends Component {
    state = {
      title: '',
      body: ''
    };


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Add posts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label> <br />
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
          </div>
          <div>
            <label>Body: </label> <br />
            <textarea name="body" value={this.state.body} onChange={this.onChange}/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
