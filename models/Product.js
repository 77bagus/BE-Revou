import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import { Kategori } from './Category.js';

export const Produk = sequelize.define('Produk', {
  id_produk: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_produk: {
    type: DataTypes.STRING,
  },
  deskripsi_produk: {
    type: DataTypes.TEXT,
  },
  harga: {
    type: DataTypes.INTEGER,
  },
  stok: {
    type: DataTypes.INTEGER,
  },
  url_gambar: {
    type: DataTypes.STRING,
  },
  id_kategori:{
    type :DataTypes.INTEGER ,
  }
});

// Produk.belongsTo(Kategori, { foreignKey: 'id_kategori' });

Produk.sync();
