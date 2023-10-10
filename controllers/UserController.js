import userService from '../services/UserService.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.JWT_SECRET;

// Controller untuk membuat pengguna baru
export const createPengguna = async (req, res) => {
  try {
    const { nama, email, kata_sandi, alamat_pengiriman } = req.body;

    const penggunaBaru = await userService.createPengguna(nama, email, kata_sandi, alamat_pengiriman);
    res.status(201).json(penggunaBaru);
  } catch (error) {
    res.status(500).json({ message: 'Gagal membuat pengguna: ' + error.message });
  }
};

// Controller untuk mendapatkan semua pengguna
export const semuaPengguna = async (req, res) => {
  try {
    const pengguna = await userService.semuaPengguna();
    res.json(pengguna);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil semua pengguna: ' + error.message });
  }
};

// Controller untuk mendapatkan pengguna berdasarkan ID
export const penggunaById = async (req, res) => {
  try {
    const id_pengguna = req.params.id_pengguna;
    const pengguna = await userService.penggunaById(id_pengguna);
    if (!pengguna) {
      res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    } else {
      res.json(pengguna);
    }
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil pengguna: ' + error.message });
  }
};

// Controller untuk login pengguna
export const login = async (req, res) => {
  const { email, kata_sandi } = req.body;
  try {
    const token = await userService.login(email, kata_sandi);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// Controller untuk mendapatkan data pengguna berdasarkan token JWT yang valid
export const getUserByToken = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, secretKey);
    const pengguna = await userService.penggunaById(decoded.id_pengguna);
    res.json(pengguna);
  } catch (error) {
    res.status(401).json({ message: 'Token JWT tidak valid' });
  }
};

export default {
  createPengguna,
  getUserByToken,
  penggunaById,
  semuaPengguna,
  login
}