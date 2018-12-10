'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/', 'TaskController.home')
Route.post('/task/create', 'TaskController.create')
Route.get('/task/delete/:id', 'TaskController.delete')
Route.on('/register').render('register')
Route.on('/login').render('login')
Route.post('/register', 'UserController.create')
Route.post('/login', 'UserController.login')
Route.get('/logout', 'UserController.logout')
