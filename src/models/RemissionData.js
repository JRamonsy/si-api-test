const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const RemissionData = sequelize.define('remissionData', {
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    referenceAgent: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    remissionDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    receivedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    whoReceive: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    plateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'plate_data',
          key: 'id'
        },
      },
    }, {
      tableName: 'remission_data',
      timestamps: true,
});

module.exports = RemissionData;