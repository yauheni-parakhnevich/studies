const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1/27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to the database')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 27
    }).then((result => {
        console.log(result)
    })).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteOne({_id: new ObjectId("5e270258cbbbc5188c1274ea")}).then((result => {
        console.log(result)
    })).catch((error) => {
        console.log(error)
    })
})

