const express = require('express');

const errorsController = require('../controllers/errors');

const router = express.Router();

// 404 page
router.use(errorsController.errorPage);

module.exports = router;