require('dotenv').config() // this allows to stash 'artificial env variables' in a file
const server = require('./api/server')

// console.log(process.env.API_SECRET)

const PORT = process.env.PORT || 5000 // fall back is nice 

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})