const { getAll, create, getOne, remove, update } = require('../controllers/remissionData.controllers');
const express = require('express');

const remissionDataRouter   = express.Router();

remissionDataRouter.route('/remission_datas')
    .get(getAll)
    .post(create);

remissionDataRouter.route('/remission_datas/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = remissionDataRouter;