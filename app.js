const express = require('express');
const bodyParser = require('body-parser');

// Create a new instance of express
const app = express();
let seed = 0;

app.use(bodyParser.json()); // support json encoded bodies
// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(seed.toString());
});

// Route that receives a POST request to /sms
app.post('/', function (req, res) {
  const num = req.body.num;
  seed = num;
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${seed} to Express`)
});

// Tell our app to listen on port 3000
app.listen(3000, function (err) {
  if (err) {
    throw err
  }
  console.log('Server started on port 3000')
});