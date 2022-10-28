'use strict';

const express = require('express');
const router = express.Router();

const {get,create,del,update} = require('../modules/Marks/Marks.controller');

router.post('/', create);
router.get('/',get)
router.put('/:id',update)
router.delete('/:id',del)


//router.use('/api',course)

module.exports = router;