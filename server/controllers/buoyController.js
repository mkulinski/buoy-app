const Buoy = require('../models/buoyModel');

const buoyController = {};

buoyController.addBuoy = (buoyData) => {
  Buoy.create(new Buoy(buoyData), (err, result) => {
    if (err) {
      return err;
    }
    return 200;
  });
};

buoyController.findOne = (buoy) => {
  const query = Buoy.where({ title: buoy.title });

  query.findOne((err, foundBuoy) => {
    if (err) return err;
    if (buoy) {
      if (buoy.date !== query.date) {
        foundBuoy.update(buoy);
        return console.log('buoy updated');
      }
      return console.log('buoy not updated');
    }
    // not found so create buoy
    return this.addBuoy(buoy);
  });
};

buoyController.findAllBuoys = (req, res) => {
  Buoy.find({}, (err, buoys) => {
    if (err) {
      return res.status(401).json({ err });
    }
    return res.status(200).json(buoys);
  });
};


module.exports = buoyController;
