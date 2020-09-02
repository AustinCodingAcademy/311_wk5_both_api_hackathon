//routers/routerUsers.js
const express = require('express')
const usersController = require('../controllers/controllerUsers')
const router = express.Router()

router.get('/x', usersController.getAllUsers2)

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.post('/', usersController.createUser)

router.put('/:id', usersController.updateUserById)

router.delete('/:first_name', usersController.deleteUserByFirstName)

module.exports = router