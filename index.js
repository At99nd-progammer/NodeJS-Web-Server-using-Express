var express = require('express');
var app = express();
var shortid = require('shortid');
var userRoute = require('./routes/user.route');

var authRoute = require('./routes/auth.route');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.get('/', function(req, res ) {
	res.render('index', {
		name:'Toan'
	});
});


app.use('/users', userRoute);
app.use('/auth', authRoute);

app.listen(port, function() {
	console.log('Server listenning on port' + port)
});
