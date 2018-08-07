const http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
	console.log(request.url);
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify({
		runs: 100,
		wickets: 3,
		overs: 15.4
	}));
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad happened', err);
	}
	console.log(`server is listening on ${port}`);
})