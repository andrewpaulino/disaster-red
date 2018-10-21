'use strict';
const path = require('path'),
      loopback = require('loopback'),
      axios = require('axios')

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/status', server.loopback.status());
  router.get('/', function(req, res) {
    const indexFile = path.resolve(__dirname, '../../client/public/index.html');
    res.sendFile(indexFile);
  });
  router.get('/guide/:id', function(req, res) {
    const indexFile = path.resolve(__dirname, '../../client/public/index.html');
    res.sendFile(indexFile);
  });
  router.get('/plan', function(req, res) {
    const indexFile = path.resolve(__dirname, '../../client/public/index.html');
    res.sendFile(indexFile);
  });
  router.get('/api/bundle.js', (req,res) => {
    const jsFile = path.resolve(__dirname, '../../client/dist/bundle.js');
    res.sendFile(jsFile)
  })
  router.get('/api/style.css', (req,res) => {
    const jsFile = path.resolve(__dirname, '../../client/dist/style.css');
    res.sendFile(jsFile)
  })
  router.get('/api/location', (req, res) => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.query.lat},${req.query.long}&key=${process.env.google}`)
    .then(response => {
      console.log(response)
      const city = response.data.results[0].address_components[3].long_name,
        state = response.data.results[0].address_components[5].short_name;

       res.send({'city': city, 'state': state})
    })
    .catch (err => {
      console.log(err)
    })
  })
 
  router.get('/api/weather', (req, res) => {
           
    axios.get(`api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.long}&APPID=${process.env.openWeather}&units=imperial`).then(result => {
      const temp = result.data.main.temp,
      wind = result.data.wind.speed;
      
      res.send({'temp': temp, 'wind': wind})
      })
      .catch(err => {
      throw err;
      })

  })
  
  server.use(router);
};
