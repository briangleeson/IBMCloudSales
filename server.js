var express = require("express"),
    app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.get("/health", function (request, response) {
  response.status(500).send("500 - UnHealthy");
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
