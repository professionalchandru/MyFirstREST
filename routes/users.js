const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('You are in users route');
})

router.get('/chandru', (req, res) => {
    res.send('You are in users/chandru route');
})
module.exports = router;