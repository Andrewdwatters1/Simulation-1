import React, {Component} from 'react';
import axios from 'axios';

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

  clearInputs = (e) => {
    this.setState({
      name: '',
      price: 0,
      imgurl: '',
    })
    console.log(this.state);
    }

  createProduct = () => {
    let obj = {
      name: this.state.name,
      price: this.state.price,
      img: this.state.imgurl,
    }
    axios.post('/api/product', obj)
    .then(() => {
      this.props.getInventory();
      this.clearInputs();
    })
    .catch(error => {
      console.log('axios POST call, originates from Form.js: ', error);
      this.clearInputs();
    })
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
        <form>
          <button onClick={this.clearInputs}>Cancel</button>
          <button onClick={this.createProduct}>Add to Inventory</button>
        </form>
      </div>
    )
  }
}