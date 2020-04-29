const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../src/app')
const User = require('../src/models/user')

const user1Id = new mongoose.Types.ObjectId()

const user1 = {
    _id: user1Id,
    name: 'Yauheni',
    email: 'yauheni@example.com',
    password: 'Red12345!',
    tokens: [{
        token: jwt.sign({_id: user1Id}, process.env.JWT_SECRET)
    }]
}

beforeEach(async ()=> {
    await User.deleteMany()

    await new User(user1).save()
})

// afterEach(()=> {
//     console.log('After each')
// })

test('Should create a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Mike',
        email: 'mike@example.com',
        password: 'Red12345!'
    }).expect(201)

    // Check that user was saved to database
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertion about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Mike',
            email: 'mike@example.com'
        },
        token: user.tokens[0].token
    })

    expect(user.password).not.toBe('Red12345!')
})

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: user1.email,
        password: user1.password
    }).expect(200)

    const user = await User.findById(response.body.user._id)
    expect(user.tokens[1].token).toBe(response.body.token)
})

test('Should not login non-existing user', async () => {
    await request(app).post('/users/login').send({
        email: 'random@user.com',
        password: 'password'
    }).expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete profile for user', async () => {
    const response = await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(user1Id)
    expect(user).toBeNull()
})

test('Should not delete profile for unauthenticated user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})