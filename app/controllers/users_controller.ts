import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/User.js'
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default class UsersController {

  async index({ inertia }: HttpContext) {
    sleep(200);
    const users = await User.all()
    return inertia.render('users', { users })
  }
}
