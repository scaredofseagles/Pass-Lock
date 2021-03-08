require('dotenv').config()
const firebase = require('firebase')

var config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASE,
  storageBucket: process.env.STORAGE
};

firebase.initializeApp(config);

  // Get a reference to the database service
var database = firebase.database();

module.exports = database