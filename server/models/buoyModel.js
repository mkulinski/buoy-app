const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buoySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model('Buoy', buoySchema);
