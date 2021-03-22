var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    var admin = req.session.user;
    if(req.session.isLogin == true){
        res.render('profile', {
            username:admin.username,
            surname:admin.surname
        });
    }else {
        res.redirect('/login');

    }
});
router.get('/login', function(req,res){
    req.session.isLogin = false;
    res.redirect('/login')
});
module.exports = router;