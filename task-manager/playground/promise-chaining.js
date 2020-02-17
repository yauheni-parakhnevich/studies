require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5e29d0bc154c663a7cbac9ec', {age: 1}).then((user) => {
//     console.log(user)

//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })

    return count
}

updateAgeAndCount('5e29d0bc154c663a7cbac9ec', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})