const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ServiceReportData = sequelize.define('serviceReportData', {
    problemDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    observations: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    requirementForRepair: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    serviceCompleted: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plateId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'plate_data',
          key: 'id'
        },
      },
    }, {
      tableName: 'service_report_data',
      timestamps: true,
});

module.exports = ServiceReportData;