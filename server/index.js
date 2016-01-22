const fs = require('fs')

const express = require('express')
const request = require('request')

// init app
const app = express()

// init route
app.get('/', (req, res) => {
  // request options
  const options = {
    url: 'https://api.github.com/users/callmecavs/repos',
    headers: {
      'User-Agent': 'callmecavs'
    }
  }

  // make github request
  request(options, (error, response, repos) => {
    if(!error && response.statusCode === 200) {
      // sort repos by stars
      const sorted = JSON.parse(repos).sort((a, b) => b.stargazers_count - a.stargazers_count)

      // write to textfile
      fs.writeFile('repos.txt', JSON.stringify(sorted), (error) => {
        if(error) throw err
      })
    }
  })
})

// start up server
app.listen(8000)
