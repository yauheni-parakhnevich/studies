const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const {user1Id, user1, user2, user3, task1, task2, task3, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Shold create a task for user', async () => {
    const response = await request(app)
        .post('/tasks') 
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .send({
            description: 'From the test'
        }).expect(201)

    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()

    expect(task.completed).toEqual(false)
})

test('Should return all tasks for user', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${user1.tokens[0].token}`)
        .expect(200)

    expect(response.body.length).toEqual(2)
})

test('Should not delete other users tasks', async () => {
    const response = await request(app)
        .delete('/tasks' + task1._id)
        .set('Authorization', `Bearer ${user2.tokens[0].token}`)
        .send()
        .expect(404)

    const task = await Task.findById(task1._id)
    expect(task).not.toBeNull()
})