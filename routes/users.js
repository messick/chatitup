var User = require("../app/models/user").User;

exports.findAll = function(req, res) {
    res.send([{name:'Nick', email:'nmessick@gmail.com'}, {name:'Ursula',eamal:'umessick@gmail.com'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", email: 'what@example.com'});
};

exports.addUser = function(req, res) {
    var data = req.body;
    console.log('Adding user: ' + JSON.stringify(data));
    var user = new User(data);

    res.send('ok');
}
