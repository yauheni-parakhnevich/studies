require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e29cb6ed851ea57085e9cc2').then((task) => {
    console.log(task)

    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})