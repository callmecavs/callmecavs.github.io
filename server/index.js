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
      // clean repos, sort by stars
      const parsed = JSON.parse(repos)
        .map(x => ({
          name: x.name,
          desc: x.description,
          url: x.html_url,
          stars: x.stargazers_count,
          forks: x.forks_count
        }))
        .sort((a, b) => b.stars - a.stars)

      // write to textfile
      fs.writeFile('repos.txt', JSON.stringify(parsed), (error) => {
        if(error) throw err
      })
    }
  })
})

// start up server
app.listen(8000)
