const express = require('express')
const app = express()

// all request will have to know that the public folder is where we put our static files
app.use(express.static('public')) // public = directory in root folder


//listening for request
app.get('/', function(req, res) { //request, response
  res.send('index.html')
})  // '/' goes to root path

app.get('/about/:name/:id', function(req, res) { //request, response
  res.send(req.params) //'about page ',
})  // '/' goes to root path

app.get('/faq', function(req, res) { //request, response
  res.send('faq page')
})  // '/' goes to root path


app.listen(3000, function () {
  console.log('express is running on port 3000');
})
