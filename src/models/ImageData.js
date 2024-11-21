const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const PlateData = require('./PlateData');


const ImageData = sequelize.define('imageData', {
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cloudinaryId: { // ID en caso de usar Cloudinary
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: 'image_data',
      timestamps: true,
});

module.exports = ImageData; 