const express = require('express');

const { controllerUser } = require('../controllers');
const { auth } = require('../middlewares/auth');
const { validateBodyCreatUser } = require('../middlewares/bodyVerify');

const routers = express.Router();

routers.post('/', validateBodyCreatUser, controllerUser.createUser);
routers.get('/', auth, controllerUser.getUser);
routers.get('/:id', auth, controllerUser.getUserById);
routers.delete('/me', auth, controllerUser.deleteUser);

module.exports = routers;