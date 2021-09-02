const express = require('express')
const Companion = require('./companions-model')
const router = express.Router()

router.get('/companions', (req, res, next) => {
    try {
        res.json(Companion.get())
    } catch (err) {
        next(err)
    }
})

//***********************500 error middleware***********//
//eslint-disable-next-line
router.use((err, req, res, next) => {
    console.log(err.message); // delete after
    res.status(err.status || 500).json({
        message: err.message,
        devMessage: 'Something bad inside the users router!'
    });
});

module.exports = router
