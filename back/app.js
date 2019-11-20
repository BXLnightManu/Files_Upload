const express = require('express');
const app = express();
const port = 5000;
const { registerRoutes } = require('./routes');

registerRoutes(app);

app.listen(port, (err) => {
    if(err) {
        const err = new Error("Not found");
        err.status = 404;
        throw err;
    } else {
        console.log('Listening on port '  +  port);
    }
})