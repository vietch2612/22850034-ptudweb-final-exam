'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        var menus = [{
                name: 'Japanese',
                imagepath: '/images/japanese-menu.jpg',
                summary: 'Lorem ipsum dolor sit amet.',
                description: 'consectetur adipiscing elit. Nullam euismod varius elementum. Suspendisse potenti.'
            }, {
                name: 'Chinese',
                imagepath: '/images/chinese-menu.jpg',
                summary: 'Aenean quis viverra neque.',
                description: 'Nulla facilisi. In hac habitasse platea dictumst'
            }, {
                name: 'Filipino',
                imagepath: '/images/Filipino-menu.jpg',
                summary: 'Aenean quis viverra neque.',
                description: 'Class aptent taciti sociosqu ad litora torquent per.'
            }, {
                name: 'Vietnamese',
                imagepath: '/images/Vietnamese-menu.jpg',
                summary: 'Mirum est notare quam littera.',
                description: 'quam nunc putamus parum claram, anteposuerit litterarum qui nunvide clari.'
            }, {
                name: 'Korean',
                imagepath: '/images/Korean-menu.jpg',
                summary: 'Quam littera gothica.',
                description: 'quam nunc putamus parum claram, anteposuerit litterarum qui nunvide clari.'
            }

        ];
        menus.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Menus', menus, {});
    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Menus', null, {});

    }
};