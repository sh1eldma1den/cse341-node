const express = require('express');
const router = require('express').Router();

router.use('/contacts', require('./contacts'));

module.exports = router;