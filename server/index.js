const express = require('express')
const request = require('request')

// init app
const app = express()

// init route
app.get('/', (req, res) => {
  // make github request
  const url = 'https://api.github.com/users/callmecavs/repos'
})

// start up server
app.listen(8000)
