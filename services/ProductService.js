import { Produk } from '../models/Product.js';

export const semuaProduk = async () => {
  try {
    const produk = await Produk.findAll();
    return produk;
  } catch (error) {
    throw new Error('Gagal mengambil semua produk: ' + error.message);
  }
};

export const produkById = async (id_produk) => {
  try {
    const produk = await Produk.findByPk(id_produk);
    return produk;
  } catch (error) {
    throw new Error('Gagal mengambil produk: ' + error.message);
  }
};

export const createProduk = async (nama_produk, deskripsi_produk, harga, stok, url_gambar_produk, id_kategori) => {
  try {
    const produkBaru = await Produk.create({
      nama_produk: nama_produk,
      deskripsi_produk: deskripsi_produk,
      harga: harga,
      stok: stok,
      url_gambar_produk: url_gambar_produk,
      id_kategori: id_kategori,
    });
    return produkBaru;
  } catch (error) {
    throw new Error('Gagal membuat produk: ' + error.message);
  }
};

export default {
    createProduk,
    produkById,
    semuaProduk
}