const { getAll, create, getOne, remove, update } = require('../controllers/imageData.controllers');
const express = require('express');
const upload = require('../utils/multer');
const imageDataRouter = express.Router();

imageDataRouter.route('/image_datas')
  .get(getAll)
  .post(upload.single('image'), create);

imageDataRouter.route('/image_datas/:id')
  .get(getOne)
  .delete(remove)
  .put(upload.single('image'), update);  // Asegúrate de que esta línea esté presente

module.exports = imageDataRouter;
