const express = require('express');
const app = express();

app.get('', (request, response)=>{
	response.send('login.html');
})

app.listen(3000);