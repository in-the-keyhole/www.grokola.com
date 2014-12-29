var express = require('express'),
    fs = require('fs');
    

// engage expreess
var api = express();

//api.use(express.logger());

// Server static files
api.use('/app', express.static(__dirname + '/app'));
api.use('/css', express.static(__dirname + '/css'));
api.use('/img', express.static(__dirname + '/img'));
api.use('/js', express.static(__dirname + '/js'));
api.use('/less', express.static(__dirname + '/less'));
api.use('/mail', express.static(__dirname + '/mail'));
api.use('/video', express.static(__dirname + '/video'));
api.use('/', express.static(__dirname + '/'));




// Ensure all routes go home, client side app..
/*pi.get('/*', function (req, res) {
    fs.createReadStream('index.html').pipe(res);
}); */  


api.listen(8000);

console.log('Listening on port 8000...');
 

