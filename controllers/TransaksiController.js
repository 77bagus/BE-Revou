import transactionService from '../services/TransaksiService.js';

const semuaTransaksi = async (req, res, next) => {
  try {
    const transaksi = await transactionService.semuaTransaksi();
    res.json(transaksi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const transaksiById = async (req, res, next) => {
  const id_transaksi = req.params.id_transaksi;

  try {
    const transaksi = await transactionService.transaksiById(id_transaksi);
    if (!transaksi) {
      res.status(404).json({ message: 'Transaksi tidak ditemukan' });
    } else {
      res.json(transaksi);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const buatTransaksi = async (req, res, next) => {
  const { id_pesanan, tanggal_transaksi, jenis_transaksi, metode_pembayaran, jumlah_pembayaran } = req.body;

  try {
    const transaksiBaru = await transactionService.createTransaksi(
      id_pesanan,
      tanggal_transaksi,
      jenis_transaksi,
      metode_pembayaran,
      jumlah_pembayaran
    );
    res.status(201).json(transaksiBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  semuaTransaksi,
  transaksiById,
  buatTransaksi,
};
