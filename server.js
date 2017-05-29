// Establishing dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var PORT = process.env.PORT || 3000;

// Set up express app
var app = express();

// Serve static content from the "public" directory
app.use(express.static(process.cwd() + "/public"));

// Enable the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Override with POST when an action has ?_method=DELETE
app.use(methodOverride("_method"));

// Set up handlebars, use main.handlebars as the default html layout, and establish handlebars as
// the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Give the server access to the burger routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
	console.log("App listening on port " + PORT);
});
