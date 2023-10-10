import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import { Pesanan } from './Order.js';

export const Transaksi = sequelize.define('Transaksi', {
  id_transaksi: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_pesanan: {
    type: DataTypes.INTEGER,
    references: {
      model: Pesanan,
      key: 'id_pesanan',
    },
  },
  tanggal_transaksi: {
    type: DataTypes.DATE,
  },
  jenis_transaksi: {
    type: DataTypes.STRING,
  },
  metode_pembayaran: {
    type: DataTypes.STRING,
  },
  jumlah_pembayaran: {
    type: DataTypes.INTEGER,
  },
});

// Transaksi.belongsTo(Pesanan, { foreignKey: 'id_pesanan' });

Transaksi.sync();
