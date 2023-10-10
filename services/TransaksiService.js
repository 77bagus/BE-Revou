import { Transaksi } from '../models/Transaksi.js';

export const semuaTransaksi = async () => {
  try {
    const transaksi = await Transaksi.findAll();
    return transaksi;
  } catch (error) {
    throw new Error('Gagal mengambil semua transaksi: ' + error.message);
  }
};

export const transaksiById = async (id_transaksi) => {
  try {
    const transaksi = await Transaksi.findByPk(id_transaksi);
    return transaksi;
  } catch (error) {
    throw new Error('Gagal mengambil transaksi: ' + error.message);
  }
};

export const createTransaksi = async (id_pesanan, tanggal_transaksi, jenis_transaksi, metode_pembayaran, jumlah_pembayaran) => {
  try {
    const transaksiBaru = await Transaksi.create({
      id_pesanan: id_pesanan,
      tanggal_transaksi: tanggal_transaksi,
      jenis_transaksi: jenis_transaksi,
      metode_pembayaran: metode_pembayaran,
      jumlah_pembayaran: jumlah_pembayaran,
    });
    return transaksiBaru;
  } catch (error) {
    throw new Error('Gagal membuat transaksi: ' + error.message);
  }
};

export default {
    createTransaksi,
    semuaTransaksi,
    transaksiById
}