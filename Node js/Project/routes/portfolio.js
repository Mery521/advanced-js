var express = require('express');
var router = express.Router();

var service = {
    "item":
    [
        {
             id:1,
             image:'images/portfolio-1.jpg',
             tiltle:  'Photoshoot On The Street',
             icon:'icon-heart2',
             icon:'icon-eye2',
             icon:'icon-download3',
        },
        {
            id:2,
            image:'images/portfolio-2.jpg',
            tiltle:  'Photoshoot On The Street',
            icon:'icon-heart2',
            icon:'icon-eye2',
            icon:'icon-download3',
       },
       {
        id:3,
        image:'images/portfolio-3.jpg',
        tiltle:  'Photoshoot On The Street',
        icon:'icon-heart2',
        icon:'icon-eye2',
        icon:'icon-download3',
   },
        {
            id:4,
            image:'images/portfolio-5.jpg',
            tiltle:  'Photoshoot On The Street',
            icon:'icon-heart2',
            icon:'icon-eye2',
            icon:'icon-download3',
        },

        {
            id:5,
            image:'images/portfolio-4.jpg',
            tiltle:  'Photoshoot On The Street',
            icon:'icon-heart2',
            icon:'icon-eye2',
            icon:'icon-download3',
        },
        {
            id:6,
            image:'images/portfolio-6.jpg',
            tiltle:  'Photoshoot On The Street',
            icon:'icon-heart2',
            icon:'icon-eye2',
            icon:'icon-download3',
        },



    ]

}
router.get('/', function(req,res,next){
    res.render('portfolio', { service: service.item});
});

module.exports = router;