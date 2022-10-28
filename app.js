'use strict';

const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');

const passportConfig = require('./config/passportConfig');
//const mongoModels=require('./mongoModels');
const mysqlModels = require('./mysqlModels');
const routes = require('./routes');
const loggerUtil = require('./utilities/logger');
const responseUtil = require('./utilities/response');

const Router = require('./routes/admin')

const app = express();
const server = http.createServer(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 1000000
}));
app.use(express.json({
  limit: '50mb'
}));
app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: loggerUtil.stream }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
passportConfig.serializeUser();
passportConfig.deserializeUser();
passportConfig.configureStrategy();
app.use(routes);

//app.use('/api',routes);

app.use((req, res, next) => {
  responseUtil.notFoundErrorResponse(res, req);
});

mysqlModels.sequelize.sync().then(function () {
  loggerUtil.log({
    message: 'Mysql DB connected',
    level: 'info'
  });
  const port = process.env.PORT || 3000;
  server.listen(port, (error) => {
    if (error) {
      loggerUtil.error({
        message: `Server error - ${error.toString()}`,
        level: 'error'
      });
    } else {
      loggerUtil.log({
        message: `Server listening at port ${port}`,
        level: 'info'
      });
    }
  });
});
