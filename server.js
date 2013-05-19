var express = require('express'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    users = require('./routes/users');

mongoose.connect('mongodb://localhost/test');

var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
});

var app = express();
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/users', users.findAll);
app.get('/users/:id', users.findById);
app.post('/users', users.addUser);

app.listen(3000);
console.log('Listening on port 3000...');
