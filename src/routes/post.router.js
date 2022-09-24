const express = require('express');
// const { validateBody } = require('../middlewares/bodyVerify');
const { controllerPost } = require('../controllers');
const { auth } = require('../middlewares/auth');
const { validateBodyCreatePost, validateBodyUpdatePost } = require('../middlewares/bodyVerify');
// const { validateBodyCreateCategory } = require('../middlewares/bodyVerify');

const routers = express.Router();

routers.get('/search', auth, controllerPost.getPostByBySearch);
routers.post('/', validateBodyCreatePost, auth, controllerPost.createPost);
routers.get('/', auth, controllerPost.getAll);
routers.get('/:id', auth, controllerPost.getPostById);
routers.put('/:id', validateBodyUpdatePost, auth, controllerPost.updatePostById);
routers.delete('/:id', auth, controllerPost.deletePostById);

module.exports = routers;