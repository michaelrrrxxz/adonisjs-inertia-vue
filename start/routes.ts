/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.on('settings').renderInertia('Index')
router.get('users', [UsersController, 'index'])

