const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {user1Id, user1, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Mike',
        email: 'mike@example.com',
        password: 'Red12345!'
    }).expect(201)

    // Check that user was saved to database
    const userDb = await User.findById(response.body.user._id)
    expect(userDb).not.toBeNull()

    // Assertion about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Mike',
            email: 'mike@example.com'
        },
        token: userDb.tokens[0].token
    })

    expect(userDb.password).not.toBe('Red12345!')
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

test('Should upload avatar image', async () => {
    const response = await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/Pic.png')
        .expect(200)

    const user = await User.findById(user1Id)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user fields', async () => {
    const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .send({'name': 'Mike1'})
        .expect(200)

    const user = await User.findById(user1Id)

    expect(user.name).toBe('Mike1')
})

test('Should not update invalid user fields', async () => {
    const response = await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .send({'location': 'London'})
        .expect(400)
})