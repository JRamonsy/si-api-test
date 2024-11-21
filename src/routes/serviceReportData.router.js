const { getAll, create, getOne, remove, update } = require('../controllers/serviceReportData.controllers');
const express = require('express');

const serviceReportRouter = express.Router();

serviceReportRouter.route('/report_datas')
    .get(getAll)
    .post(create);

serviceReportRouter.route('/report_datas/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = serviceReportRouter;