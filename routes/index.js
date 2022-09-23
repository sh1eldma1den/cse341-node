const express = require('expess');
const router = require('express').Router();

router.use('/contacts', require('./contacts'));

module.exports = router;