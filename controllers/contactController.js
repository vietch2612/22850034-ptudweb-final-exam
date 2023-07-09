'use strict';

const controller = {};
const sequelize = require('sequelize');
const models = require('../models');

controller.create = (message) => {
    message.checkStatus = false;
    message.submited = sequelize.literal('CURRENT_TIMESTAMP');
    console.log(message);
    models.Message.create(message);
}

module.exports = controller;
