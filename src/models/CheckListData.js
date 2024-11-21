const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const CheckListDta = sequelize.define('checkListData', {
    technicianNameExitStep: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNamevisualInspection: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNamePhotographicEvidence: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNameRequiredParts: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    t_platePhoto: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNameRequiredMaterials: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNameEvidenceProcess: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNameEvidenceTerm: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNameSulzerReport: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    t_finalInspection: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNameRemission: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    technicianNameGuide: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    advanceExitStep: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advanceVisualInspection: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advancePhotographicEvidence: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advanceRequiredParts: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advanceRequiredMaterials: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advanceEvidenceProcess: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advanceEvidenceTerm: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advanceSulzerReport: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    a_finalInspection: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advanceRemission: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    advanceGuide: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    requiredMaterials: {
        type: DataTypes.TEXT,
        allowNull: true
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
      tableName: 'check_list_data',
      timestamps: true,

    
});

module.exports = CheckListDta;