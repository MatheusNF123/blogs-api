const express = require('express');
// const { validateBody } = require('../middlewares/bodyVerify');
const { controllerCategory } = require('../controllers');
const { auth } = require('../middlewares/auth');
const { validateBodyCreateCategory } = require('../middlewares/bodyVerify');
// const { validateBodyCreatUser } = require('../middlewares/bodyVerify');

const routers = express.Router();

routers.post('/', validateBodyCreateCategory, auth, controllerCategory.createCategory);

module.exports = routers;