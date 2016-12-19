const X2JS = require('x2js');
const buoyController = require('./buoyController');

const grabDataController = {};

grabDataController.grabData = (response) => {
  let str = '';

  response.on('data', (chunk) => {
    str += chunk;
  });

  response.on('end', () => {
    // Converting XML to JS
    const x2js = new X2JS();
    const document = x2js.xml2js(str);
    const doc = document.rss.channel.item;
    // Removing all html tags from the strings in the description
    doc.forEach((item) => {
      const { description, title } = item;
      // removes uneeded space and characters and turns it into an array
      const trimDesc = description.replace(/\/|br|<|>|\n|:/ig, '')
                                  .split('strong')
                                  .map(strng => strng.trim());
      // grabs date
      const currDate = trimDesc.splice(0, 3).filter(date => date !== '')[0];
      // create an object for description key/value pairs
      const descObj = {};
      trimDesc.forEach((val, index) => {
        (index % 2 === 0) ? descObj[val] : descObj[trimDesc[index - 1]] = val;
      });
      // create an buoy object to store in database
      const buoy = Object.assign({ title, date: currDate, description: descObj });
      console.log(buoy);
      // stores buoy in database
      buoyController.findOne(buoy);
    });
  });
}

module.exports = grabDataController;
