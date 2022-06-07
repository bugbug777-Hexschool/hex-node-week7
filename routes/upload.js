var express = require('express');
var router = express.Router();
const { checkAuth } = require('../service/auth');
const { checkFile } = require('../service/fileHandler');
const uploadController = require('../controllers/upload');

router.post('/', checkAuth, checkFile, uploadController.uploadToImgur);

module.exports = router;