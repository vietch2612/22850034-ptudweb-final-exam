'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        var products = [{
            name: 'Wasabe Mixed Rice',
            description: 'Proin in sodales dui.',
            menuId: 1
        }, {
            name: 'Matsutake Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 1
        }, {
            name: 'Tofu Mixed Rice',
            description: 'Phasellus elit erat',
            menuId: 1
        }, {
            name: 'Shiitake Mixed Rice',
            description: 'Aliquam id justo et elit',
            menuId: 1
        }, {
            name: 'Matsutake Mixed Rice',
            description: 'Etiam feugiat urna eu ligula',
            menuId: 1
        }, {
            name: 'Butternut Mixed Rice',
            description: 'Nullam euismod varius elementum',
            menuId: 1
        }, {
            name: 'Greenbeans Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 1
        }, {
            name: 'Lemon Mixed Rice',
            description: 'Nulla placerat fermentum nibh',
            menuId: 1
        }, {
            name: 'Potato Mixed Rice',
            description: 'Nunc adipiscing augue',
            menuId: 1
        }, {
            name: 'Spicy Mixed Rice',
            description: 'Per inceptos himenaeos',
            menuId: 1
        }, {
            name: 'Enoki Mixed Rice',
            description: 'Class aptent taciti sociosqu',
            menuId: 1
        }, {
            name: 'Takikomi Gohan',
            description: 'Molestie massa a dignissim',
            menuId: 1
        }, {
            name: 'Wasabe Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 2
        }, {
            name: 'Matsutake Mixed Rice',
            description: 'Phasellus elit erat',
            menuId: 2
        }, {
            name: 'Tofu Mixed Rice',
            description: 'Aliquam id justo et elit',
            menuId: 2
        }, {
            name: 'Shiitake Mixed Rice',
            description: 'Etiam feugiat urna eu ligula',
            menuId: 2
        }, {
            name: 'Matsutake Mixed Rice',
            description: 'Nullam euismod varius elementum',
            menuId: 2
        }, {
            name: 'Butternut Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 2
        }, {
            name: 'Greenbeans Mixed Rice',
            description: 'Nulla placerat fermentum nibh',
            menuId: 2
        }, {
            name: 'Lemon Mixed Rice',
            description: 'Nunc adipiscing augue',
            menuId: 2
        }, {
            name: 'Potato Mixed Rice',
            description: 'Proin in sodales dui.',
            menuId: 2
        }, {
            name: 'Spicy Mixed Rice',
            description: 'Per inceptos himenaeos',
            menuId: 2
        }, {
            name: 'Enoki Mixed Rice',
            description: 'Class aptent taciti sociosqu',
            menuId: 2
        }, {
            name: 'Takikomi Gohan',
            description: 'Molestie massa a dignissim',
            menuId: 2
        }, {
            name: 'Vegetable Mixed Rice',
            description: 'Proin in sodales dui.',
            menuId: 3
        }, {
            name: 'Native Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 3
        }, {
            name: 'Checkin Mixed Rice',
            description: 'Phasellus elit erat',
            menuId: 3
        }, {
            name: 'Bacon Mixed Rice',
            description: 'Aliquam id justo et elit',
            menuId: 3
        }, {
            name: 'Grilled Meat Mixed Rice',
            description: 'Etiam feugiat urna eu ligula',
            menuId: 3
        }, {
            name: 'Honey Mixed Rice',
            description: 'Nullam euismod varius elementum',
            menuId: 3
        }, {
            name: 'Mushroom Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 3
        }, {
            name: 'Lemon Mixed Rice',
            description: 'Nulla placerat fermentum nibh',
            menuId: 3
        }, {
            name: 'Potato Mixed Rice',
            description: 'Nunc adipiscing augue',
            menuId: 3
        }, {
            name: 'All Spice Mixed Rice',
            description: 'Per inceptos himenaeos',
            menuId: 3
        }, {
            name: 'Red Chilli Mixed Rice',
            description: 'Class aptent taciti sociosqu',
            menuId: 3
        }, {
            name: 'Guinisang Gohan',
            description: 'Molestie massa a dignissim',
            menuId: 3
        }, {
            name: 'Wasabe Mixed Rice',
            description: 'Proin in sodales dui.',
            menuId: 4
        }, {
            name: 'Matsutake Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 4
        }, {
            name: 'Tofu Mixed Rice',
            description: 'Phasellus elit erat',
            menuId: 4
        }, {
            name: 'Shiitake Mixed Rice',
            description: 'Aliquam id justo et elit',
            menuId: 4
        }, {
            name: 'Matsutake Mixed Rice',
            description: 'Etiam feugiat urna eu ligula',
            menuId: 4
        }, {
            name: 'Butternut Mixed Rice',
            description: 'Nullam euismod varius elementum',
            menuId: 4
        }, {
            name: 'Greenbeans Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 4
        }, {
            name: 'Lemon Mixed Rice',
            description: 'Nulla placerat fermentum nibh',
            menuId: 4
        }, {
            name: 'Potato Mixed Rice',
            description: 'Nunc adipiscing augue',
            menuId: 4
        }, {
            name: 'Spicy Mixed Rice',
            description: 'Per inceptos himenaeos',
            menuId: 4
        }, {
            name: 'Enoki Mixed Rice',
            description: 'Class aptent taciti sociosqu',
            menuId: 4
        }, {
            name: 'Takikomi Gohan',
            description: 'Molestie massa a dignissim',
            menuId: 4
        }, {
            name: 'Wasabe Mixed Rice',
            description: 'Proin in sodales dui.',
            menuId: 5
        }, {
            name: 'Matsutake Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 5
        }, {
            name: 'Tofu Mixed Rice',
            description: 'Phasellus elit erat',
            menuId: 5
        }, {
            name: 'Shiitake Mixed Rice',
            description: 'Aliquam id justo et elit',
            menuId: 5
        }, {
            name: 'Matsutake Mixed Rice',
            description: 'Etiam feugiat urna eu ligula',
            menuId: 5
        }, {
            name: 'Butternut Mixed Rice',
            description: 'Nullam euismod varius elementum',
            menuId: 5
        }, {
            name: 'Greenbeans Mixed Rice',
            description: 'Nam mattis molestie',
            menuId: 5
        }, {
            name: 'Lemon Mixed Rice',
            description: 'Nulla placerat fermentum nibh',
            menuId: 5
        }, {
            name: 'Potato Mixed Rice',
            description: 'Nunc adipiscing augue',
            menuId: 5
        }, {
            name: 'Spicy Mixed Rice',
            description: 'Per inceptos himenaeos',
            menuId: 5
        }, {
            name: 'Enoki Mixed Rice',
            description: 'Class aptent taciti sociosqu',
            menuId: 5
        }, {
            name: 'Takikomi Gohan',
            description: 'Molestie massa a dignissim',
            menuId: 5
        }];

        products.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            item.price = (Math.random() * 10).toFixed(2);
            return item;
        });

        return queryInterface.bulkInsert('Products', products, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};