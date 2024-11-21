const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');


const PlateData = sequelize.define('plateData', {
    receivedDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    finalDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    customer: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cat: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    user: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    hp: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    spec: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    frame: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    serie: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    volts: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    catalog: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    equipment: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    power: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING(50),
        allowNull: false
    },    
    remissionNum: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    note: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    quote: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
  }, {
    tableName: 'plate_data',
    timestamps: true,
});



module.exports = PlateData;