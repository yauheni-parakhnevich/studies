const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'https://api.darksky.net/forecast/dc89121d5a419b80c39b702d806f2d13/' + lat + ',' + lon + '?units=si&lang=be'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service');
        } else if(body.error) {
            callback('Unable to find location');
        } else {
            const {currently} = body
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + currently.temperature + ' degrees out. There is a ' + currently.precipProbability * 100 + '% chance of rain')
        }
    })
    
}


module.exports = forecast