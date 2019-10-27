import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users').then(res => res.json())
      .then(users => this.setState({ users }))
  }

  // componentDidMount(){
  //   fetch('/users')
  // // .then(res => res.json()) // comment this out for now
  // .then(res => res.text())          // convert to plain text
  // .then(text => console.log(text))  // then log it out
  // }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;