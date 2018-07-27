import React, {Component} from 'react';
import Product from './../product/Product'
import axios from 'axios';

export default class Dashboard extends Component {
  constructor() {
    super()
  }

  deleteItem = () => {
        console.log(this);
    axios.delete(`/api/product/${"empty"}`)
        .then(result => {
          this.props.getInventory();
        })
        .catch(error => {
          console.log('Error, request originated from Dashboard: ', error)
        })
   
  }

  render() {
    if(this.props.fullInventory.length>0) {
      var inventoryItem = this.props.fullInventory.map((e, i) => {
        return (
        <Product 
          id={i+1}
          productName={e.name} 
          productPrice={e.price} 
          productImg={e.img}
          deleteItem={this.deleteItem}/>
        )
      })
      return (
        <div>
          {inventoryItem}
        </div>
      )
    } else {
      return (null)
    }
  }
}