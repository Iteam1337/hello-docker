var express = require('express')
var app = express();

app.get('/', function(req,res){
	res.send('RAZ, you truly are the greatest - senaste koden. hurr durr hurr =^_^=');
})

app.listen(3000);
