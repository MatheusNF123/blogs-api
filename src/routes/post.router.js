const express = require('express');
// const { validateBody } = require('../middlewares/bodyVerify');
const { controllerPost } = require('../controllers');
const { auth } = require('../middlewares/auth');
const { validateBodyCreatePost } = require('../middlewares/bodyVerify');
// const { validateBodyCreateCategory } = require('../middlewares/bodyVerify');

const routers = express.Router();

routers.post('/', validateBodyCreatePost, auth, controllerPost.createPost);
routers.get('/', auth, controllerPost.getAll);

module.exports = routers;