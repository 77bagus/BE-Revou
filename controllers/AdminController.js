import adminService from '../services/AdminService.js';

const semuaAdmin = async (req, res, next) => {
  try {
    const admin = await adminService.semuaAdmin();
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adminById = async (req, res, next) => {
  const id_admin = req.params.id_admin;

  try {
    const admin = await adminService.adminById(id_admin);
    if (!admin) {
      res.status(404).json({ message: 'Admin tidak ditemukan' });
    } else {
      res.json(admin);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const buatAdmin = async (req, res, next) => {
  const { nama_admin, email, kata_sandi_terenkripsi } = req.body;

  try {
    const adminBaru = await adminService.createAdmin(nama_admin, email, kata_sandi_terenkripsi);
    res.status(201).json(adminBaru);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tambahkan fungsi lainnya sesuai kebutuhan (update dan delete)

export default {
  semuaAdmin,
  adminById,
  buatAdmin,
};
