var http = require('http');

var PORT = 8080;

// a helper function 
function handleRequest(request, response) {
	response.end('it works path hit: ' + request.url);
}

// createServer accepts a function that will take 
// two arguments... request and response as shown above
// similar to creating connection to database
var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log('server listening on: http://localhost:%s',PORT);
});