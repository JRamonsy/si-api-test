const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');


const PlateData = sequelize.define('plateData', {
    receivedDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    finalDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    customer: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cat: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    user: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    hp: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    spec: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    frame: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    serie: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    volts: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    equipment: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    brand: {
        type: DataTypes.STRING(50),
        allowNull: true
    },    
    note: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    quote: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
  }, {
    tableName: 'plate_data',
    timestamps: true,
});



module.exports = PlateData;