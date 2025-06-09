// import type { HttpContext } from '@adonisjs/core/http'

import type { HttpContext } from '@adonisjs/core/http'
export default class SettingsController {
  index({ inertia }: HttpContext) {
    return inertia.render('Settings')
  }
}
