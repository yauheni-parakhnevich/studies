const request = require('request')

const url = 'https://api.darksky.net/forecast/dc89121d5a419b80c39b702d806f2d13/37.8267,-122.4233?units=si&lang=be'

request({ url: url, json: true }, (error, response) => {
    const currently = response.body.currently
    console.log(response.body.daily.data[0].summary + ' It is currently ' + currently.temperature + ' degrees out. There is a ' + currently.precipProbability * 100 + '% chance of rain')

})