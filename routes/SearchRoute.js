var express = require('express');
var router = express.Router();
var SearchController = require('../controllers/SearchController');

router.get("/", SearchController.search)


module.exports = router;