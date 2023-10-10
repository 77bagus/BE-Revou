import paymentMethodService from '../services/PaymentMethodService';

const semuaMetodePembayaran = async (req, res, next) => {
  try {
    const metodePembayaran = await paymentMethodService.semuaMetodePembayaran();
    res.json(metodePembayaran);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const metodePembayaranById = async (req, res, next) => {
  const id_metode_pembayaran = req.params.id_metode_pembayaran;

  try {
    const metodePembayaran = await paymentMethodService.metodePembayaranById(id_metode_pembayaran);
    if (!metodePembayaran) {
      res.status(404).json({ message: 'Metode pembayaran tidak ditemukan' });
    } else {
      res.json(metodePembayaran);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const buatMetodePembayaran = async (req, res, next) => {
  const { nama_metode_pembayaran, deskripsi_metode_pembayaran } = req.body;

  try {
    const metodePembayaranBaru = await paymentMethodService.createMetodePembayaran(nama_metode_pembayaran, deskripsi_metode_pembayaran);
    res.status(201).json(metodePembayaranBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tambahkan fungsi lainnya sesuai kebutuhan (update dan delete)

export default {
  semuaMetodePembayaran,
  metodePembayaranById,
  buatMetodePembayaran,
};
