const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
// const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
// app.use('/api', api);

// Send all other requests to the Angular app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

//Set Port
const port = process.env.PORT || '3000';

app.listen(port);
console.log("App listening on port " + port);


app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  return next();
});
// application

app.get('/node', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/inline.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/inline.bundle.js'));
});
app.get('/main.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/main.bundle.js'));
});
app.get('/polyfills.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/polyfills.bundle.js'));
});
app.get('/styles.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/styles.bundle.js'));
});
app.get('/api/vendor.bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/vendor.bundle.js'));
});


// app.get('/api/css/style.css', function(req, res) {
//   res.sendFile('public/css/style.css', { root: __dirname }); // load the single view file (angular will handle the page changes on the front-end)
// });
//
// app.get('/api/js/app-js.js', function(req, res) {
//   res.sendFile('public/js/app-js.js', { root: __dirname }); // load the single view file (angular will handle the page changes on the front-end)
// });
