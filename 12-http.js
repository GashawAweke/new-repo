// [PAUSE]()

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our homepage');
  } else if (req.url === '/about') {
    res.end('here is brief description about us');
  }
  // default response
  else {
    res.end(`
      <h1>oops we couldn't find what you are looking for</h1>
      `);
  }
});

server.listen(5000);
