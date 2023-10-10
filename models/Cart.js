import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';
import { Pengguna } from './User.js';
import { Produk } from './Product.js';

export const Keranjang = sequelize.define('Keranjang', {

  id_pengguna: {
    type: DataTypes.INTEGER,
    references: {
      model: Pengguna,
      key: 'id_pengguna',
    },
  },
  id_produk: {
    type: DataTypes.INTEGER,
    references: {
      model: Produk,
      key: 'id_produk',
    },
  },
  jumlah: {
    type: DataTypes.INTEGER,
  },
});

// Keranjang.belongsTo(Pengguna, { foreignKey: 'id_pengguna' });
// Keranjang.belongsTo(Produk, { foreignKey: 'id_produk' });

Keranjang.sync();
