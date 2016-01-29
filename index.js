var express = require('express')
var app = express();

app.get('/', function(req,res){
	res.send('Mats, you truly are the greatest - senaste koden. hurr durr hurr =^_^=');
})

app.listen(3000);
