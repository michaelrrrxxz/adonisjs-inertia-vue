/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import UsersController from '#controllers/users_controller'
import DashboardController from '#controllers/dashboard_controller'
import SettingsController from '#controllers/settings_controller'
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.get('users', [UsersController, 'index'])
router.get('dashboard',[DashboardController, 'index'])
router.get('settings', [SettingsController, 'index'])

