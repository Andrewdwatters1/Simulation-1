import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [{
        name: "hat",
        price: 10,
        img: "none"
      }, {
        name: "shirt",
        price: 15,
        img: "none"
      }, {
        name: "mug",
        price: 8,
        img: "none"
      }, 
    ],
      actualInventory: "connect to DB",
    }
  }

  // getInventory = () => {
  //   // does something 
  // }

  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard fullInventory={this.state.inventory}/>
        <Form/>
      </div>
    );
  }
}

export default App;
