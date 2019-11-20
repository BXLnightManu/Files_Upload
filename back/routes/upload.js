const express = require('express');
const uploadRouter = express.Router();
const { upload, fileProcessing } = require("../handlers");

uploadRouter.post("/monupload", upload.array("photos"), fileProcessing);

module.exports = {
    uploadRouter
}