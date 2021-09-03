
//const path = require('path')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { logger } = require('./middleware/middleware')
const companionRouter = require('./companions/companions-router')
const server = express()



server.use(express.json())
server.use(cors())
//server.use(express.static(path.join(__dirname, 'myApp/build')))
server.use(logger)
server.use(morgan('dev'))
server.use('/api', companionRouter)


server.get('/', (req, res) => {
    res.json({
        message: 'Doctor Who companions',
        devMessage: 'try /api/companions',
        devMessage2: 'try /api/register',
        devMessage3: 'try /api/login'
    })
})
// server.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'myApp/build', 'index.html'))
// })

module.exports = server
