var app = require('express')();
var http = require('http').createServer(app);
const bodyParser = require('body-parser');
const routers = require('./routes/router.index')
//require('./config/db');

const cors= require("cors")

// middleware
app.use(bodyParser.json());

//Cors
app.use(cors())
// router directing files
app.use('/api', routers);


http.listen(8080, () => {
  console.log('listening on :8080');
});
