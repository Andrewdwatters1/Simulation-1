module.exports = {
  getInventory: (req, res) => {
    let db = req.app.get('db');
    db.get_inventory()
    .then(result => {
      res.send(result);
    })
  },
  



}