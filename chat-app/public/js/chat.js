const socket = io()


const $messageForm = document.querySelector('form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocationButton = document.querySelector('#sendLocation')
const $messages = document.querySelector('#messages')

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

// Options
const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})

socket.on('message', (message) => {
    console.log(message)

    const html = Mustache.render(messageTemplate, {
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })

    $messages.insertAdjacentHTML('beforeend', html)
})

socket.on('locationMessage', (message) => {
    console.log(message)

    const html = Mustache.render(locationMessageTemplate, {
        url: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')       
    })

    $messages.insertAdjacentHTML('beforeend', html)
})

$messageForm.addEventListener("submit", (e) => {
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')

    const message = e.target.elements.message

    socket.emit('sendMessage', message.value, (msg) => {
        console.log('The message was delivered, reponse: ', msg)

        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value = ''
        $messageFormInput.focus()
    })
})

$sendLocationButton.addEventListener('click', () => {
    if(navigator.geolocation) {
        $sendLocationButton.setAttribute('disabled', 'disabled')

        navigator.geolocation.getCurrentPosition((position) => {
            socket.emit('sendLocation', {latitude: position.coords.latitude, longitude: position.coords.longitude}, () => {
                console.log('The location has been shared')

                $sendLocationButton.removeAttribute('disabled')
            })
        })
    } else {
        alert('Geolocation is not supported by your browser')
    }
})

socket.emit('join', {username, room})