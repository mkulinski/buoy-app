const express = require('express');
const http = require('http');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const buoyController = require('./controllers/buoyController');
const grabDataController = require('./controllers/grabDataController');

const mongoURI = 'mongodb://localhost:27017/buoy';
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client')));

const options = {
  host: 'www.ndbc.noaa.gov',
  path: '/rss/ndbc_obs_search.php?lat=40N&lon=73W&radius=100',
  method: 'GET',
};

const requesting = http.request(options, grabDataController.grabData);
requesting.end();

// get request to send all buoy data to frontend
app.get('/allBuoys', buoyController.findAllBuoys);

app.listen(3000, () => {
  console.log('server running');
});
