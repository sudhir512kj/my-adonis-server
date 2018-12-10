'use strict'
const Task = use('App/Models/Task')
class TaskController {
    async home({view}) {
        // const task1 = new Task
        // task1.title = 'Walk the dog'
        // task1.description = 'Go and walk for half an hour'
        // task1.done = false
        // const task2 = new Task
        // task2.title = 'Feed the cat'
        // task2.description = 'The food is on the fridge'
        // task2.done = false
        // const task3 = new Task
        // task3.title = 'Buy some pizza'
        // task3.description = 'Go at the shop before 7pm'
        // task3.done = true
        // await task1.save()
        // await task2.save()
        // await task3.save()
        const tasks = await Task.all()
        return view.render('tasklist', {
            tasks: tasks.toJSON()
        })
    }
    async create({ request, response, session, auth}) {
        const taskPayload = request.all()
        const task = new Task
        task.title = taskPayload.title
        task.description = taskPayload.description
        task.done = false
        await task.save()
        session.flash({ message: 'Task created!' })
        return response.redirect('back')
    }
    async delete({ request, response, session, params}) {
        const task = await Task.find(params.id)
        await task.delete()
        session.flash({ taskHandling: 'Task deleted!'})
        return response.redirect('back')
    }
}

module.exports = TaskController
