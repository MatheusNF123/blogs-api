const express = require('express');
const error = require('./middlewares/error');

// ...
const routersLogin = require('./routes/login.router');
const routersUser = require('./routes/user.router');
const routersCategories = require('./routes/category.router');
const routersPost = require('./routes/post.router');

const app = express();

app.use(express.json());

app.use('/login', routersLogin);
app.use('/user', routersUser);
app.use('/categories', routersCategories);
app.use('/post', routersPost);

app.use(error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
