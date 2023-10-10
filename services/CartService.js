import { Keranjang } from '../models/Cart.js';

export const semuaKeranjang = async () => {
  try {
    const keranjang = await Keranjang.findAll();
    return keranjang;
  } catch (error) {
    throw new Error('Gagal mengambil semua keranjang: ' + error.message);
  }
};

export const keranjangById = async (id_keranjang) => {
  try {
    const keranjang = await Keranjang.findByPk(id_keranjang);
    return keranjang;
  } catch (error) {
    throw new Error('Gagal mengambil keranjang: ' + error.message);
  }
};

export const createKeranjang = async (id_pengguna, id_produk, jumlah) => {
  try {
    const keranjangBaru = await Keranjang.create({
      id_pengguna: id_pengguna,
      id_produk: id_produk,
      jumlah: jumlah,
    });
    return keranjangBaru;
  } catch (error) {
    throw new Error('Gagal membuat keranjang: ' + error.message);
  }
};

export default {
    createKeranjang,
    keranjangById,
    semuaKeranjang
}
