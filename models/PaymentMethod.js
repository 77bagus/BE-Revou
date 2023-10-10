import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

export const MetodePembayaran = sequelize.define('MetodePembayaran', {
  id_metode_pembayaran: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_metode_pembayaran: {
    type: DataTypes.STRING,
  },
  deskripsi_metode_pembayaran: {
    type: DataTypes.TEXT,
  },
});

MetodePembayaran.sync();
