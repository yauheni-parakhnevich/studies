console.log('CLient-side javascript file is loaded')

fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log('Error: ' + data.error)
        } else {
            console.log(data.location, data.forecast);
        }
    })
})