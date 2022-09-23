const express = require('express');
const { validateBody } = require('../middlewares/bodyVerify');
const { controllerLogin } = require('../controllers');

const routers = express.Router();

routers.post('/', validateBody, controllerLogin.login);

module.exports = routers;