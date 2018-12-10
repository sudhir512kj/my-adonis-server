'use strict'

const User = use('App/Models/User')

class UserController {
  async create({ request, response, auth }) {
    const userPayload = request.all();
    const user = new User;
    user.email = userPayload.email;
    //We will also use the mail as username to simplify things here
    user.username = userPayload.email;
    user.password = userPayload.password;
    await user.save();

    await auth.login(user);
    return response.redirect('/');
  }

  async login({ request, response, auth, session }) {
    const userPayload = request.all();
    try {
    	await auth.attempt(userPayload.email, userPayload.password)
    } catch (e) {
    	console.log(e);
	    session.flash({ loginError: e });
    }

    return response.redirect('/');
  }

  async logout ({ auth, response }) {
    await auth.logout();
    return response.redirect('/');
  }
}

module.exports = UserController
