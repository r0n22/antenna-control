var express = require('express');
var app = express();
var portnum = '/dev/tty.usbserial';



app.get('/',function(req, res){
	res.sendfile('./public/index.html');
});


app.listen(3000);
console.log('Listening on port 3000');
