const express = require('express');
const Route = express.Router();
const UserController = require('../Controller/userController')

Route.post('/createUser', UserController.createUser)
Route.put('/updateUser/:id', UserController.updateUser)
Route.get('/readDB', UserController.readDB)
Route.delete('/deleteUser/:id', UserController.deleteUser)

module.exports = Route;