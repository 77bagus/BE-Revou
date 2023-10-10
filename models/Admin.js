import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

export const Admin = sequelize.define('Admin', {
  id_admin: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  kata_sandi_terenkripsi: {
    type: DataTypes.STRING,
  },
});

Admin.sync();
