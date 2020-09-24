let mongoose = require('mongoose')

const port = '27017'
const server = 'http://localhost:127.0.0.1'
const database = 'test'
const user = 'root'
const password = 'password'

const connect = 'mongodb://root:password@localhost:27017/?authSource=test&readPreference=primary&appname=MongoDB%20Compass%20Beta&ssl=false'

mongoose.connect(connect)

// mongoose.connect(`mongodb://${user}:${password}@${server}:${port}/${database}`, {'useNewUrlParser': true})

mongoose.set('useCreateIndex', true);

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)
