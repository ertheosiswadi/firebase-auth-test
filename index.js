const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('./public'));

app.get('', (request, response)=>{
	response.sendFile(path.join(__dirname + '/public/login.html'));
})

app.listen(3000, ()=> {
	console.log('server is live');
});