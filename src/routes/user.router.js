const express = require('express');
// const { validateBody } = require('../middlewares/bodyVerify');
const { controllerUser } = require('../controllers');
const { validateBodyCreatUser } = require('../middlewares/bodyVerify');

const routers = express.Router();

routers.post('/', validateBodyCreatUser, controllerUser.createUser);

module.exports = routers;