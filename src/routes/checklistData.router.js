const { getAll, create, getOne, remove, update } = require('../controllers/checkListData.controllers');
const express = require('express');

const checkListDataRouter = express.Router();

checkListDataRouter.route('/checklist_datas')
    .get(getAll)
    .post(create);

checkListDataRouter.route('/checklist_datas/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = checkListDataRouter;