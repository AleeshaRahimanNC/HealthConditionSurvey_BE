var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const seedDefaultTemplates = require('./utils/seedDefaultTemplates');


const templatesRoutes = require('./routes/templates');
const surveysRoutes = require('./routes/surveys');
const responsesRoutes = require('./routes/responses');

const app = express();

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Call the seeding function during server startup
seedDefaultTemplates();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware Configuration
// origin:['http://localhost:3000']
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/admin/templates', templatesRoutes);
app.use('/api/admin/surveys', surveysRoutes);
// app.use('/api/user/responses', responsesRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
