import React, {Component} from 'react';
import Product from './../product/Product'

export default class Dashboard extends Component {
  constructor() {
    super()

  }

  render() {
    var inventoryItem = this.props.fullInventory.map((e, i) => {
      return (
      <Product 
        id={i+1}
        productName={e.name} 
        productPrice={e.price} 
        productImg={e.img}/>
      )
    })
    return (
      <div>
        {inventoryItem}
        {console.log('dashboard props', this.props)}
      </div>
    )
  }
}