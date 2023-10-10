import productService from '../services/ProductService.js';

const semuaProduk = async (req, res, next) => {
  try {
    const produk = await productService.semuaProduk();
    res.json(produk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const produkById = async (req, res, next) => {
  const id_produk = req.params.id_produk;

  try {
    const produk = await productService.produkById(id_produk);
    if (!produk) {
      res.status(404).json({ message: 'Produk tidak ditemukan' });
    } else {
      res.json(produk);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const buatProduk = async (req, res, next) => {
  const { nama_produk, deskripsi_produk, harga, stok, url_gambar, id_kategori } = req.body;

  try {
    const produkBaru = await productService.createProduk(nama_produk, deskripsi_produk, harga, stok, url_gambar, id_kategori);
    res.status(201).json(produkBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tambahkan fungsi lainnya sesuai kebutuhan (update dan delete)

export default {
  semuaProduk,
  produkById,
  buatProduk,
};
