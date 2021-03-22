var express = require('express');
var router = express.Router();

var service = {
    "item":
    [
        {
            id:1,
            icon:'icon-hotairballoon',
            tiltle: 'Marketing',
            text:'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.'
        },

        {
            id:2,
            icon:'icon-search',
            tiltle: 'Search Engine',
            text:'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.'
        },
       {
           id:3,
        icon: 'icon-wallet',
        title: ' Earn Money',
        text: 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.'

       },
       {
        id:4,
        icon: 'icon-wine',
        title: ' Entrepreneur',
        text: ' Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.'

       },

         {
             id:5,
            icon: 'icon-genius',
            title: ' Stragic Plan',
            text: 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. '
    },
    {
        id:6,
        icon: 'icon-chat',
        title: ' Support',
        text: 'Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit.'
    }

    ]
}


router.get('/', function(req,res){
    res.render('index', {service: service.item});
});

module.exports = router;