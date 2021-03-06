import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  state = {
    users: [],
    isLoading: false
  }

  async componentDidMount() {
    this.setState({isLoading: true});

    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, isLoading: false})

    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        <Navbar title='Github Finder'/>
        <div className='container'>
          <Users isLoading={this.state.isLoading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
