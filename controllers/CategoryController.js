import categoryService from '../services/CategoryService.js';

const semuaKategori = async (req, res, next) => {
  try {
    const kategori = await categoryService.semuaKategori();
    res.json(kategori);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const kategoriById = async (req, res, next) => {
  const id_kategori = req.params.id_kategori;

  try {
    const kategori = await categoryService.kategoriById(id_kategori);
    if (!kategori) {
      res.status(404).json({ message: 'Kategori tidak ditemukan' });
    } else {
      res.json(kategori);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const buatKategori = async (req, res, next) => {
  const { nama_kategori, deskripsi_kategori } = req.body;

  try {
    const kategoriBaru = await categoryService.createKategori(nama_kategori, deskripsi_kategori);
    res.status(201).json(kategoriBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tambahkan fungsi lainnya sesuai kebutuhan (update dan delete)

export default {
  semuaKategori,
  kategoriById,
  buatKategori,
};
