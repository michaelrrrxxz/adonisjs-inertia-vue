import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/User.js'
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default class DashboardController {
  public async index({ inertia }: HttpContext) {
    sleep(200);
    try {
      const countResult = await User.query().count('* as total').first()
      const userCount= Number(countResult?.$extras.total) || 0
      return inertia.render('Dashboard', {
       userCount,
      })
    } catch (error) {
      return inertia.render('Dashboard', {
       userCount: 0,
      })
    }
  }
}
