const express = require('express')
const config  = require('config')
const mongoose = require('mongoose')


const app = express()

app.use('/api/fetch', require('./routes/fetch.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`The app has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log("server error: " + e.message)
        process.exit(1)
    }
}

start()

