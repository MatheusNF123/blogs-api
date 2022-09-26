const express = require('express');

const { controllerCategory } = require('../controllers');
const { auth } = require('../middlewares/auth');
const { validateBodyCreateCategory } = require('../middlewares/bodyVerify');

const routers = express.Router();

routers.post('/', validateBodyCreateCategory, auth, controllerCategory.createCategory);
routers.get('/', auth, controllerCategory.getCategory);

module.exports = routers;