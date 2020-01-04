var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8081});
console.log('running on port 8081');

wss.on('connection', function(ws){ 
	console.log('connected');
	ws.on('message', function(message){ 
		console.log('Server message: ' + message);
		wss.clients.forEach(function each(client) {
	    		client.send(message);
	  	});
	});
});

