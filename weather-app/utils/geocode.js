const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieWF1aGVuaXBhcmFraG5ldmljaCIsImEiOiJjazRqemV3ZXcxbDkwM2Vxd29lZ3RhOG55In0.GigBINuDOzsGfWuuGLXlOA&limit=1'

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location service');
        } else if(response.body.features.length === 0) {
            callback('Unable to find location');
        } else {
            const feature = response.body.features[0];

            callback(undefined, {
                latitude: feature.center[1],
                longitude: feature.center[0],
                location: feature.place_name
            })
        }
    })
    
}

module.exports = geocode