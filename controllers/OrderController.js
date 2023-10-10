import orderService from '../services/OrderService.js';

const semuaPesanan = async (req, res, next) => {
  try {
    const pesanan = await orderService.semuaPesanan();
    res.json(pesanan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const pesananById = async (req, res, next) => {
  const id_pesanan = req.params.id_pesanan;

  try {
    const pesanan = await orderService.pesananById(id_pesanan);
    if (!pesanan) {
      res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    } else {
      res.json(pesanan);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const buatPesanan = async (req, res, next) => {
  const { id_pelanggan, tanggal_pemesanan, total_harga, status_pesanan, alamat_pengiriman } = req.body;

  try {
    const pesananBaru = await orderService.createPesanan(id_pelanggan, tanggal_pemesanan, total_harga, status_pesanan, alamat_pengiriman);
    res.status(201).json(pesananBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tambahkan fungsi lainnya sesuai kebutuhan (update dan delete)

export default {
  semuaPesanan,
  pesananById,
  buatPesanan,
};
