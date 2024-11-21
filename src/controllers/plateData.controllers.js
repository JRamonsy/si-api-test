const catchError = require('../utils/catchError');
const PlateData = require('../models/PlateData');
const ImageData = require('../models/ImageData');
const CheckListData = require('../models/CheckListData');
const ServiceReportData = require('../models/ServiceReportData');
const RemissionData = require('../models/RemissionData');

const getAll = catchError(async(req, res) => {
    const results = await PlateData.findAll({
        include: [
            { model: ImageData, as: 'image' },
            { model: CheckListData, as: 'checkList' },
            { model: ServiceReportData, as: 'serviceReport'},
            { model: RemissionData, as: 'Remission'}
        ]
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await PlateData.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await PlateData.findByPk(id, {
        include: [
            { model: ImageData, as: 'image' },
            { model: CheckListData, as: 'checkList' },
            { model: ServiceReportData, as: 'serviceReport'},
            { model: RemissionData, as: 'Remission'}
        ]
    });
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await PlateData.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await PlateData.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}   