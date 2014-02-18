
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api'),
    fs = require('fs');

var app = module.exports = express();

// Configuration
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);
app.get('/api/navigation', api.navigation);
app.get('/api/menu', api.menu);

app.post('/json/output/output.json', function(req, res) {
	var fileLoc = 'json/output/';
	var fileName = 'output.json';
	var data = JSON.stringify(req.body, null, 4);
    fs.writeFile(fileLoc+fileName, data, function (err) {
		if (err) throw err;
		res.end();
	});
	// console.log(res);

});

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server
app.listen(8080, function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
