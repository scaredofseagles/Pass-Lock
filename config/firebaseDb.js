var config = {
  apiKey: `${process.env.APIKEY}`,
  authDomain: `${process.env.PROJECTID}.firebaseapp.com`,
  databaseURL: `https://${process.env.DATABASE}.firebaseio.com`,
  storageBucket: `${process.env.STORAGE}.appspot.com`
};

firebase.initializeApp(config);

  // Get a reference to the database service
var database = firebase.database();