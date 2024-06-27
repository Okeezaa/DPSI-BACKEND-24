var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products'); // Impor rute products
var categoriesRouter = require('./routes/categories'); // Impor rute categories
var authRouter = require('./routes/auth');
var sequelize = require('./models/index'); // Impor sequelize
var app = express();
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); // Gunakan rute products
app.use('/categories', categoriesRouter); // Gunakan rute categories
app.use('/auth', authRouter);
// Sinkronkan model dengan database
sequelize.sync()
 .then(() => {
 console.log('Database synchronized');
 })
 .catch(err => {
 console.error('Error synchronizing database:', err);
 });
 const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


module.exports = app;
