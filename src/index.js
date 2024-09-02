const express = require('express');
const bodyParser = require('body-parser');

const { serverConfig } = require('./config/index');
const apiRoutes = require('./routes/index');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/api', apiRoutes);

(async function setupAndRunServer() {
    app.listen(serverConfig.PORT,function(err) {
        if(!err){
            console.log(`sevrer is running fine on port:  ${serverConfig.PORT}`)
        }
    })
})()
