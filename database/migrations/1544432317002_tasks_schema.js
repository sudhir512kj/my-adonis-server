'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.string('title')
      table.string('description')
      table.boolean('done')
    })
  }

  down () {
    this.drop('tasks', (table) => {
      
    })
  }
}

module.exports = TasksSchema
