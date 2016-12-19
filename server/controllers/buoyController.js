const Buoy = require('../models/buoyModel');

const buoyController = {};

// creates a new buoy
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
  // Search database for buoy
  query.findOne((err, foundBuoy) => {
    if (err) return err;
    if (foundBuoy) {
      // If buoy exists and has a new time, update it
      if (foundBuoy.date !== buoy.date) {
        // Update Buoy info
        Buoy.update({ title: foundBuoy.title }, buoy, (err, buoyUpdated) => {
          if (err) return err;
          return console.log('buoy updated');
        })
      }
      return console.log('buoy not updated');
    }
    // not found in DB so create buoy
    return this.addBuoy(buoy);
  });
};
// Grabs all list of all Buoys
buoyController.findAllBuoys = (req, res) => {
  Buoy.find({}, (err, buoys) => {
    if (err) {
      return res.status(401).json({ err });
    }
    return res.status(200).json(buoys);
  });
};


module.exports = buoyController;
