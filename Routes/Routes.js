const TodoControler = require('../controler/TodoControler')
module.exports = (app) => {



    app.get('/api', TodoControler.getReq)
    app.post('/api/todo', TodoControler.postReq)



}