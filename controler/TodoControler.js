const Todo = require('../Model/TodoSchema')

module.exports = {

    getReq: (req, res, next) => {

        Todo.find({})
            .then(responce => res.send(responce))
            .catch(next)

        // res.send('saasd')
    },

    postReq: (req, res, next) => {

        const request = req.body;
        console.log(request)
        Todo.create(request)
            .then(responce => res.send(responce))
            .catch(next)
    }
}