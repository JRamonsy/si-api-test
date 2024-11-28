const express = require('express');
const plateDataRouter = require('./plateData.router');
const imageDataRouter = require('./imageData.router');
const checkListDataRouter = require('./checklistData.router');
const serviceReportRouter = require('./serviceReportData.router');
const remissionDataRouter = require('./remissionData.router');
const imageDatasServiceReportRouter = require('./imageDatasServiceReport.router');
const router = express.Router();

// colocar las rutas aquí
router.use(plateDataRouter);
router.use(imageDataRouter);
router.use(checkListDataRouter);
router.use(serviceReportRouter)
router.use(remissionDataRouter)
router.use(imageDatasServiceReportRouter)

module.exports = router;