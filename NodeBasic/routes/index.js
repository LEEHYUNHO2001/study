var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
const fs = require('fs');
const path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var loginRouter = require('./login');
var login = require('../Cookie/logincookie.js');

router.use(cookieParser());
router.use(bodyParser.urlencoded({extended: false}));
router.use('/', loginRouter)

//Home
router.get('/', (request, response) => {
    fs.readdir('./data', function(error, filelist){
        var title = 'Web';
        var description = 'Welcome Web';
        var list = template.list(filelist);
        var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}
            <img src="/images/view.jpg" style="width:300px; display:block; margin-top:10px">`,
            `<a href="/topic/create">create</a>`,
            login.authStatusUI(request ,response)); 
    response.send(html);  
    });                
});

module.exports = router;