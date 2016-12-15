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

// $.get(URL, function (data) {
//     $(data).find("item").each(function () { // or "item" or whatever suits your feed
//         var el = $(this);
//
//         console.log("------------------------");
//         console.log("title      : " + el.find("title").text());
//         console.log("description: " + el.find("description").text());
//     });
// });

const options = {
  host: 'www.ndbc.noaa.gov',
  path: '/rss/ndbc_obs_search.php?lat=40N&lon=73W&radius=100',
  method: 'GET',
};

let doc;

function callback(response) {
  let str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function() {
    // Converting XML to JS
    const x2js = new X2JS();
    const document = x2js.xml2js(str);
    doc = document.rss.channel.item;
    // Removing all html tags from the strings in the description
    doc.forEach((item) => {
      item.description.replace(/\/|br|<|>|\n|:/ig, '');
    })
    let test = doc[0].description.replace(/\/|br|<|>|\n|:/ig, '');
    test = test.split('strong').map((item) => {
      return item.trim();
    });
    // gets an array with just the date property
    const date = test.splice(0, 3).filter((item) => item !== '');
    // creates an object with key/value pairs of everything in the description
    const outObj = {};
    for (let i = 0; i < test.length; i++) {
      if (!i % 2) {
        outObj[test[i]];
      } else {
        outObj[test[i - 1]] = test[i];
      }
    }
    buoyController.addBuoy({ })
    console.log(outObj);

    // console.log(document.rss.channel.item);
    // const title = document.rss.channel.item[0].title;
    // console.log(title)
    // const description = document.rss.channel.item[0].description;
    // console.log(description);
  });
}

const requesting = http.request(options, callback);
requesting.end();

app.get('/allBuoys', (req, res) => {
  res.json(doc);
});

app.listen(3000, () => {
  console.log('server running');
});
