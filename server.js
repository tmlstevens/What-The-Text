var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport.js')(passport);

var exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Use 'public' directory for html files
app.use(express.static("public"));

// var indexRoutes = 
require('./controllers/index-routes.js')(app,passport);
// app.use(indexRoutes);

// var routes2 = require('./controllers/routes2.js');
// app.use(routes2);

// var userhomeRoutes = 
require('./controllers/userhome-routes.js')(app);
// app.use(userhomeRoutes);

app.listen(PORT, () => {
    console.log("App listening on http://localhost:" + PORT)
})
