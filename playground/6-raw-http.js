const https = require('https')

const url = 'https://api.darksky.net/forecast/dc89121d5a419b80c39b702d806f2d13/40,-75?units=si&lang=be'

const request = https.request(url, (response) => {
    let data = ''
    
    response.on('data', (chunk) => {
        data += chunk.toString()
        
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()