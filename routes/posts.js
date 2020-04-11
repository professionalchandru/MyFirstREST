const express = require('express');
const router = express.Router();
const postmodel = require('../models/postmodel');
// const debug = require('debug');

// debugWarn = debug('warn');
// debugError = debug('error');

router.get('/', (req, res) => {
    res.send('You are in posts route');
})

router.get('/specific', (req, res) => {
    res.send('You are in sepcific posts route');
})

router.post('/', (req, res) => {
    console.log(req.body);
    const posttoserver = new postmodel({
        title: req.body.title,
        description: req.body.description
    });
    console.log(posttoserver);

    posttoserver.save((err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
    // .then(data => {
    //     console.log(data);
    //     res.status(200).json(data);
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(404).json(err);
    // });

});
module.exports = router;