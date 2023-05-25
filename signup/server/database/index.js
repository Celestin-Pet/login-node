const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// mongodb database connection (standard boilerplate mongo connection code)
const uri = 'mongodb://localhost:27017/mern-passport-login-Aug-18-2018'

mongoose.connect(uri)
    .then(() => console.log("Mongodb connection estrablished"))
    .catch(err => console.log(err))

module.exports = mongoose.connection;