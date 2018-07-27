module.exports = {
  getInventory: (req, res) => {
    let db = req.app.get('db');
    db.get_inventory()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.log('Error, originates in controllers, getInventory: ', error)
    })
  },
  addProduct: (req, res) => {
    let db = req.app.get('db');
    let {name, price, img} = req.body;
    db.create_product([name, price, img])
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      console.log('Error, originates in controllers, addProduct: ', error)
    })
  }



}




