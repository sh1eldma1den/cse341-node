const express = require('express');
const router = require('express').Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));
router.use('/',
    (docData = (req,res) => {
        let docData = {
            documentationURL:'https://https://github.com/sh1eldma1den/cse341-node/tree/master/api-docs',
        };
        res.send(docData);
    })
);
module.exports = router;