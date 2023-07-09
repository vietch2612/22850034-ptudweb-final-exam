'use strict';
module.exports = (sequelize, DataTypes) => {
    var Menu = sequelize.define('Menu', {
        name: DataTypes.STRING,
        imagepath: DataTypes.STRING,
        summary: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {});
    Menu.associate = function(models) {
        // associations can be defined here
        Menu.hasMany(models.Product, { foreignKey: 'menuId' });
    };
    return Menu;
};