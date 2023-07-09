'use strict';

const controller = {};
const sequelize = require('sequelize');
const models = require('../models');
const Menu = models.Menu;

controller.getAll = () => {
    return Menu.findAll({});
}

controller.getById = (id) => {
    let menu = Menu.findOne({
        where: {
            id: id
        },
        include: [
            {
                model: models.Product,
                as: 'Products'
            }
        ]
    });
    return menu;
};

module.exports = controller;
