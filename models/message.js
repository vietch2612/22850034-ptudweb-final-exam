'use strict';
module.exports = (sequelize, DataTypes) => {
    var Message = sequelize.define('Message', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        subject: DataTypes.STRING,
        message: DataTypes.TEXT,
        submited: DataTypes.DATE,
        checkStatus: DataTypes.BOOLEAN
    }, {});
    Message.associate = function (models) {
        // associations can be defined here
    };
    return Message;
};