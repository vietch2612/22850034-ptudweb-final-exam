'use strict';

const express = require('express');

const router = express.Router();
const controller = require('../controllers/menuController');

router.get('/', async (request, response) => {
    let menu = await controller.getAll();
    response.locals.menu = menu;
    response.render('menu');
});

router.get('/:id', async (request, response) => {
    let id = request.params.id;
    response.locals.menu = await controller.getById(id)
    response.render('details');
});

module.exports = router;