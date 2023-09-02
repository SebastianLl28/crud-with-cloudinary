import db from "../db/db.js";
import {DataTypes} from 'sequelize'


const Hotel = db.define('hotel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  image_id: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true,
  timestamps: true,
  updatedAt: true
})

export default Hotel