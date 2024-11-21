const { getAll, create, getOne, remove, update } = require('../controllers/plateData.controllers');
const express = require('express');

const plateDataRouter = express.Router();

plateDataRouter.route('/plate_datas')
    .get(getAll)
    .post(create);

plateDataRouter.route('/plate_datas/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = plateDataRouter;