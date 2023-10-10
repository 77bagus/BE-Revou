import { Pesanan } from '../models/Order.js';

export const semuaPesanan = async () => {
  try {
    const pesanan = await Pesanan.findAll();
    return pesanan;
  } catch (error) {
    throw new Error('Gagal mengambil semua pesanan: ' + error.message);
  }
};

export const pesananById = async (id_pesanan) => {
  try {
    const pesanan = await Pesanan.findByPk(id_pesanan);
    return pesanan;
  } catch (error) {
    throw new Error('Gagal mengambil pesanan: ' + error.message);
  }
};

export const createPesanan = async (id_pelanggan, tanggal_pemesanan, total_harga, status_pesanan, alamat_pengiriman) => {
  try {
    const pesananBaru = await Pesanan.create({
      id_pelanggan: id_pelanggan,
      tanggal_pemesanan: tanggal_pemesanan,
      total_harga: total_harga,
      status_pesanan: status_pesanan,
      alamat_pengiriman: alamat_pengiriman,
    });
    return pesananBaru;
  } catch (error) {
    throw new Error('Gagal membuat pesanan: ' + error.message);
  }
};

export default{
    createPesanan,
    pesananById,
    semuaPesanan
};