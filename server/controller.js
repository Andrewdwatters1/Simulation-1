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
  },

  deleteProduct: (req, res) => {
    console.log('req params at controller', req.params);    
    let db = req.app.get('db');
    // let {id} = req.params; // FIX ME 
  //     for (let i = 0; i < db.length; i++) {
  //       if (Number(id) === db[i].id) {
  //         db.splice(i, 1)
  //       }
  //     }
  //  res.send(db)
    db.delete_product(req.params)
    .then(result => {
      res.send(result)
    })
    .catch(error => {
      console.log('Error, originates in controllers, deleteProduct: ', error)
    })
},
}




