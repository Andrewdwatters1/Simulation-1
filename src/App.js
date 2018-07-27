import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
    }
  }

  componentDidMount = () => {
    this.getInventory();
  }

  getInventory = () => {
    axios.get('/api/inventory')
    .then(result => {
      this.setState({
        inventory: result.data
      })
    })
    .catch(error => {
        console.log('axios GET call, originates from App.js error: ', error)
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard fullInventory={this.state.inventory}/>
        <Form getInventory={this.getInventory}/>
      </div>
    );
  }
}

export default App;
