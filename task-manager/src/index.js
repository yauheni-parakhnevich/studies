const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is running on port ' + port)
})

const jwt = require('jsonwebtoken')
const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123'}, 'thisisasecretkey', {expiresIn: '7 days'})

    console.log(token)

    const data = jwt.verify(token, 'thisisasecretkey')
    console.log(data)
}

myFunction()

// const bcrypt = require('bcryptjs')
// const myFunction = async () => {
//     const password = 'Red12345!'

//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('REd12345!', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()