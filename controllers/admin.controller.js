//var connection = require('../config/db');

module.exports.admin = (req, res) => {
    console.log('router work!');
}

module.exports.login = (req, res) => {
    var body = {
        "username": req.body.username,
        "password": req.body.password
    }

        //Test username password
        if (body.username==='admin' && body.password==='123456'){
            console.log(req.body)
            return res.status(200).json({ status: true, message: 'success' });
        } else {
            return res.status(404).json({ status: false, message: 'fail' });
        }
}