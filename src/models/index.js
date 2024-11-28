const ImageData = require('./ImageData');
const PlateData = require('./PlateData');
const CheckListData = require('./CheckListData');
const ServiceReportData = require('./ServiceReportData');
const RemissionData = require('./RemissionData');
const ImageDatasServiceReport = require('./ImageDatasServiceReport');


PlateData.hasMany(ImageData, { foreignKey: 'plateId', as: 'image', onDelete: 'CASCADE' });
ImageData.belongsTo(PlateData, { foreignKey: 'plateId', as: 'plate' });

// Definimos la relación de PlateData y checkList 
PlateData.hasOne(CheckListData, {
    foreignKey: 'plateId',   // La clave foránea en CheckListData que hace referencia a PlateData
    as: 'checkList', onDelete: 'CASCADE'              // Alias para facilitar las consultas con asociaciones
});
CheckListData.belongsTo(PlateData, {
    foreignKey: 'plateId',   // Clave foránea que conecta CheckListData con PlateData
    as: 'plate'                  // Alias para referirse a PlateData desde CheckListData
});

// Definimos la relación de PlateData y ServicereportData
PlateData.hasOne(ServiceReportData, {
    foreignKey: 'plateId',   // La clave foránea en ServiceReportData que hace referencia a PlateData
    as: 'serviceReport', onDelete: 'CASCADE'              // Alias para facilitar las consultas con asociaciones
});
ServiceReportData.belongsTo(PlateData, {
    foreignKey: 'plateId',   // Clave foránea que conecta ServiceReportData con PlateData
    as: 'plate'                  // Alias para referirse a PlateData desde ServiceReportdata
});

// Definimos la relación de PlateData y ServicereportData
PlateData.hasOne(RemissionData, {
    foreignKey: 'plateId',   // La clave foránea en ServiceReportData que hace referencia a PlateData
    as: 'Remission', onDelete: 'CASCADE'              // Alias para facilitar las consultas con asociaciones
});
RemissionData.belongsTo(PlateData, {
    foreignKey: 'plateId',   // Clave foránea que conecta ServiceReportData con PlateData
    as: 'plate'                  // Alias para referirse a PlateData desde ServiceReportdata
});

ServiceReportData.hasMany(ImageDatasServiceReport, { foreignKey: 'service_report_id', as: 'images', onDelete: 'CASCADE', hooks: true  });
ImageDatasServiceReport.belongsTo(ServiceReportData, { foreignKey: 'service_report_id', as: 'service' });



