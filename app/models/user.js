var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var schema = Schema({
    name: String,
    email: String
})

var User = mongoose.model('User', schema);

module.exports = {
  User: User
}
