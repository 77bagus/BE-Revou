import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

export const Kategori = sequelize.define('Kategori', {
  id_kategori: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_kategori: {
    type: DataTypes.STRING,
  },
  deskripsi_kategori: {
    type: DataTypes.TEXT,
  },
});

Kategori.sync();
