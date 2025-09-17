const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // make sure db.json is in root
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // all routes will start with /api

server.listen(3000, () => {
  console.log('✅ JSON Server is running on port 3000');
});
