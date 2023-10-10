import { Admin } from '../models/Admin.js';

export const semuaAdmin = async () => {
  try {
    const admin = await Admin.findAll();
    return admin;
  } catch (error) {
    throw new Error('Gagal mengambil semua admin: ' + error.message);
  }
};

export const adminById = async (id_admin) => {
  try {
    const admin = await Admin.findByPk(id_admin);
    return admin;
  } catch (error) {
    throw new Error('Gagal mengambil admin: ' + error.message);
  }
};

export const createAdmin = async (nama_admin, email, kata_sandi) => {
  try {
    const adminBaru = await Admin.create({
      nama_admin: nama_admin,
      email: email,
      kata_sandi: kata_sandi,
    });
    return adminBaru;
  } catch (error) {
    throw new Error('Gagal membuat admin: ' + error.message);
  }
};

// Tambahkan fungsi lainnya sesuai kebutuhan (update dan delete)

export default {
  semuaAdmin,
  adminById,
  createAdmin,
};
