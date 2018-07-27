import React, {Component} from 'react';

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    }
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    })
  }

  handleChangeImage = (e) => {
    this.setState({
      imgurl: e.target.value,
    })
  }

  handleCancel = () => {
    this.setState({
      name: "",
      price: 0,
      imgurl: "",
    })
  }

  addToInventory = () => {
    console.log('addToInventory method not written') 
  }


  render() {
    return (
      <div>
        Image URL:
        <input onChange={this.handleChangeImage}/>
        Product Name:
        <input onChange={this.handleChangeName}/>
        Price:
        <input onChange={this.handleChangePrice} type="number"/>
        <button onClick={this.handleCancel}>Cancel</button>
        <button onClick={this.addToInventory}>Add to Inventory</button>
      </div>
    )
  }
}