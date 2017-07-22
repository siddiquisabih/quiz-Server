const express = require('express')
const Routes = require('./Routes/Routes')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || '3000';


app.use(bodyParser.json())

Routes(app)

app.use((err, req, res, next) => {
    res.send(err.message)
})


app.listen(port, function () {
    console.log("server is listening on port : ", port);
})
// app.listen(1000 , ()=>{
//     console.log('server is running on port 1000')
// })
