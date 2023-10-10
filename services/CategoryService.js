import { Kategori } from '../models/Category.js';

export const semuaKategori = async () => {
  try {
    const kategori = await Kategori.findAll();
    return kategori;
  } catch (error) {
    throw new Error('Gagal mengambil semua kategori: ' + error.message);
  }
};

export const kategoriById = async (id_kategori) => {
  try {
    const kategori = await Kategori.findByPk(id_kategori);
    return kategori;
  } catch (error) {
    throw new Error('Gagal mengambil kategori: ' + error.message);
  }
};

export const createKategori = async (nama_kategori, deskripsi_kategori) => {
  try {
    const kategoriBaru = await Kategori.create({
      nama_kategori: nama_kategori,
      deskripsi_kategori: deskripsi_kategori,
    });
    return kategoriBaru;
  } catch (error) {
    throw new Error('Gagal membuat kategori: ' + error.message);
  }
};

export default {
    createKategori,
    kategoriById,
    semuaKategori
}
