var project = require('pillars');

project.services.get('http').configure({port:3000}).start();

project.routes.add(new Route({
	id: 'Home',
	path: '/',
	method: ['get','post']
}, function(gw) {
	gw.html("<h1>Hello World!!</h1>");
}));