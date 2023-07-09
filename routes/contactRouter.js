'use strict';

const express = require('express');

const router = express.Router();
const controller = require('../controllers/contactController');

router.get('/', async (request, response) => {
    response.render('contact');
});

router.post('/', async (request, response, status) => {
    let message = request.body;
    let result = await controller.create(message);
    response.render('contact', { message: "Thank you for your submisstion! We will contact you soon." });
});

module.exports = router;