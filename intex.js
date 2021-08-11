const http = require('http');

const server = http.createServer((req, res) => {
	const path = req.path ? req.path : '/';

	res.write('URL PATH: ' + path + '\n');
	res.write('URL method: ' + req.method);

	res.end();
})

server.listen(8080, () => {
	console.log('Server run on http://localhost:8080')
})
