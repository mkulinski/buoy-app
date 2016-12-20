# buoy-app

#### Stack
* React
* Node/Express
* MongoDB

#### To Start

* After you clone the repo run `npm install` to install all dependencies
* Next, run `npm run build` to build the frontend code
* Then, run `npm run server` to start to server
* Open a browser and navigate to `http://localhost:3000/`


#### Using the App
* Enter a username and hit submit (in a real application this would use a full login/signup/auth sequence)
* This will bring you to a list of all the buoys
* Click on the star in the top left corner to favorite a buoy
* Use the navigation at the top to change your view to see all of your favorites!


#### Notes
* Only buoy information that has changed or is new, is added/updated on the database.
* The buoy information is updated/added each time the server starts. In a real application this would be a CRON job that would run every hour or so.
