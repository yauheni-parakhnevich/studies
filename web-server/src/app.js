const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Some weather forecast string',
        location: 'Gdansk'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});