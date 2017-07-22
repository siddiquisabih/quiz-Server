const app = require('./App')
var port = process.env.PORT || '3000';


app.listen(port, function () {
    console.log("server is listening on port : ", port);
})
// app.listen(1000 , ()=>{
//     console.log('server is running on port 1000')
// })
