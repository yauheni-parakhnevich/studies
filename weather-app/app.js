const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const argv = process.argv
const location = argv[2]

if(location) {
    geocode(location, (error, data) => {
        if(error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })    
    })

} else {
    console.log('Argument is missing')
}