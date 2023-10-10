import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import { Pengguna } from './User.js';

export const Pesanan = sequelize.define('Pesanan', {
  id_pesanan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pelanggan: {
    type: DataTypes.INTEGER,
    references: {
      model: Pengguna,
      key: 'id_pengguna',
    },
  },
  tanggal_pemesanan: {
    type: DataTypes.DATE,
  },
  total_harga: {
    type: DataTypes.INTEGER,
  },
  status_pesanan: {
    type: DataTypes.STRING,
  },
  alamat_pengiriman: {
    type: DataTypes.STRING,
  },
});

// Pesanan.belongsTo(Pengguna, { foreignKey: 'id_pelanggan' });

Pesanan.sync();
