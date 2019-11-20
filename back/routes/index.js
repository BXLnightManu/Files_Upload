const { uploadRouter } = require('./upload');

function registerRoutes(app) {
    app.use("/", uploadRouter);
}

module.exports = {
    registerRoutes
}