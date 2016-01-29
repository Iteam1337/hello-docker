var express = require('express')
var app = express();

app.get('/', function(req,res){
	res.send('hurr hurr =^_^=');
})

app.listen(3000);
