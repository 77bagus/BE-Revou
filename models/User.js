import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

export const Pengguna = sequelize.define('Pengguna', {
  id_pengguna: {
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
  kata_sandi: {
    type: DataTypes.STRING,
  },
  alamat_pengiriman: {
    type: DataTypes.STRING,
  },
});

Pengguna.sync();
