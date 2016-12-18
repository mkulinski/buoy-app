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

buoyController.findAllBuoys = (req, res) => {
  Buoy.find({}, (err, buoys) => {
    if (err) {
      return res.status(401).json({ err });
    }
    return res.status(200).json(buoys);
  });
};


module.exports = buoyController;
