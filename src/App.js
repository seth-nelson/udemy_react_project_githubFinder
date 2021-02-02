import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import './App.css';

class App extends Component {
  state = {
    users: [],
    isLoading: false,
    alert: null
  }

  // --- TEST USERS ---

  // async componentDidMount() {
  //   this.setState({isLoading: true});

  //   const res = await axios.get(`https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ users: res.data, isLoading: false});

  //   console.log(res.data);
  // }

  searchUsers = async text => {
    this.setState({ isLoading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, isLoading: false});
  }

  // This only shows the clear users tab if there are users being shown
  clearUsers = () => this.setState({ users: [], isLoading: false });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    // set timeout of 5 seconds, or 5000 ms for message to disappear
    setTimeout(() => this.setState({ alert: null }), 5000)
  };

  render() {
    const { users, isLoading } = this.state

    return (
      <div className="App">
        <Navbar title='Github Finder'/>
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
