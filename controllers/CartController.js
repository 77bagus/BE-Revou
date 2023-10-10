import cartService from '../services/CartService.js';

const semuaKeranjang = async (req, res, next) => {
  try {
    const keranjang = await cartService.semuaKeranjang();
    res.json(keranjang);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const keranjangById = async (req, res, next) => {
  const id_keranjang = req.params.id_keranjang;

  try {
    const keranjang = await cartService.keranjangById(id_keranjang);
    if (!keranjang) {
      res.status(404).json({ message: 'Keranjang tidak ditemukan' });
    } else {
      res.json(keranjang);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const buatKeranjang = async (req, res, next) => {
  const { id_pengguna, id_produk, jumlah } = req.body;

  try {
    const keranjangBaru = await cartService.createKeranjang(id_pengguna, id_produk, jumlah);
    res.status(201).json(keranjangBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tambahkan fungsi lainnya sesuai kebutuhan (update dan delete)

export default {
  semuaKeranjang,
  keranjangById,
  buatKeranjang,
};
