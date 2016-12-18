const express = require('express');
const http = require('http');
const X2JS = require('x2js');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const buoyController = require('./controllers/buoyController');
// const userController = require('./controllers/userController');

const mongoURI = 'mongodb://localhost:27017/buoy';
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client')));

// const options = {
//   host: 'www.ndbc.noaa.gov',
//   path: '/rss/ndbc_obs_search.php?lat=40N&lon=73W&radius=100',
//   method: 'GET',
// };
//
// let doc;
//
// function callback(response) {
//   let str = '';
//   response.on('data', function (chunk) {
//     str += chunk;
//   });
//
//   response.on('end', function() {
//     // Converting XML to JS
//     const x2js = new X2JS();
//     const document = x2js.xml2js(str);
//     doc = document.rss.channel.item;
//     // Removing all html tags from the strings in the description
//     doc.forEach((item) => {
//       const { description, title } = item;
//       // removes uneeded space and characters
//       let trimDesc = description.replace(/\/|br|<|>|\n|:/ig, '');
//       trimDesc = trimDesc.split('strong').map(strng => strng.trim());
//       // grabs date
//       const currDate = trimDesc.splice(0, 3).filter(date => date !== '')[0];
//       // create an object for description key/value pairs
//       const descObj = {};
//       for (let i = 0; i < trimDesc.length; i++) {
//         if (i % 2 === 0) {
//           descObj[trimDesc[i]];
//         } else {
//           descObj[trimDesc[i - 1]] = trimDesc[i];
//         }
//       }
//       // create an buoy object to store in database
//       const buoy = Object.assign({ title, date: currDate, description: descObj });
//       // stores buoy in database
//       buoyController.addBuoy(buoy);
//     });
//   });
// }
//
// const requesting = http.request(options, callback);
// requesting.end();

// get request to send all buoy data to frontend
app.get('/allBuoys', buoyController.findAllBuoys);

app.listen(3000, () => {
  console.log('server running');
});
