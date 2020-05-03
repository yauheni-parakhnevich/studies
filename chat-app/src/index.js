const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const Filter = require('bad-words')

const {generateMessage} = require('./utils/messages')

const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketio(server)

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directories to serve
app.use(express.static(publicDirectoryPath))

//let count = 0

io.on('connection', (socket) => {
    console.log('New websocket connection')

    socket.on('join', ({username, room}) => {
        socket.join(room)

        socket.emit('message', generateMessage('Welcome!'))
        socket.broadcast.to(room).emit('message', generateMessage(`${username} has joned!`))   
    })

    socket.on('sendMessage', (message, callback) => {
        const filter = new Filter()

        if(filter.isProfane(message)) {
            return callback('Profanity is not allowed')
        }
        
        io.emit('message', generateMessage(message))
        callback('Delivered!')
    })

    socket.on('disconnect', () => {
        io.emit('message', generateMessage('User has left'))
    })

    socket.on('sendLocation', (location, callback) => {
        io.emit('locationMessage', generateMessage(`https://google.com/maps?q=${location.latitude},${location.longitude}`))

        callback()
    })
})


server.listen(port, () => {
    console.log('Server is running on port ' + port)
})
