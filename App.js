const express = require('express')
const Routes = require('./Routes/Routes')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())

Routes(app)

app.use((err, req, res, next) => {
    res.send(err.message)
})


module.exports = app