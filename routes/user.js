'use strict';

const express = require('express');
const router = express.Router();

const {
  getUsers
} = require('../modules/user/userController');

router.get('/', getUsers);

module.exports = router;
