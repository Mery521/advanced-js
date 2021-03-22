var express = require('express');
var router = express.Router();

const admin = {
        username: 'Admin',
        surname: 'Adminyan',
        email: 'admin@mail.ru',
        password: '123456',
        isLogin: false
    }

    router.get('/', function(req,res, next){
        if(!req.session.isLogin){
            res.render('login');
        }else{
            res.redirect('/')
        }

    });
    
router.post('/profile', function (req, res){
    
        const {email, password }= req.body;
        
        if(admin.email== email && admin.password == password){
            req.session.isLogin = true;
            req.session.user = admin;
            res.redirect('/profile');
        } else{
            res.redirect('/login');
        }
    
});
    
module.exports = router;