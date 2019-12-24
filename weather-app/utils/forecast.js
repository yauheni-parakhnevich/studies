const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/dc89121d5a419b80c39b702d806f2d13/' + lat + ',' + lon + '?units=si&lang=be'

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service');
        } else if(response.body.error) {
            callback('Unable to find location');
        } else {
            const currently = response.body.currently
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + currently.temperature + ' degrees out. There is a ' + currently.precipProbability * 100 + '% chance of rain')
        }
    })
    
}


module.exports = forecast