'use strict';
module.exports = (sequelize, DataTypes) => {
    var Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL
    }, {});
    Product.associate = function(models) {
        // associations can be defined here
        Product.belongsTo(models.Menu, { foreignKey: 'menuId' });
    };
    return Product;
};