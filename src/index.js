const express = require('express');

const port = 6500;
const app = express();

(async function setupAndRunServer() {
    app.listen(function(err) {
        if(!err){
            console.log(`sevrer is running fine on port:  ${port}`)
        }
    })
})()
