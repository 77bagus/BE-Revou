import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Pengguna } from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.JWT_SECRET;

export const semuaPengguna = async () => {
  try {
    const pengguna = await Pengguna.findAll();
    return pengguna;
  } catch (error) {
    throw new Error('Gagal mengambil semua pengguna: ' + error.message);
  }
};

export const penggunaById = async (id_pengguna) => {
  try {
    const pengguna = await Pengguna.findByPk(id_pengguna);
    return pengguna;
  } catch (error) {
    throw new Error('Gagal mengambil pengguna: ' + error.message);
  }
};

export const createPengguna = async (nama, email, kata_sandi, alamat_pengiriman) => {
  try {
    const kata_sandi2 = await bcrypt.hash(kata_sandi, 12); 

    const penggunaBaru = await Pengguna.create({
      nama: nama,
      email: email,
      kata_sandi: kata_sandi2,
      alamat_pengiriman: alamat_pengiriman,
    });
    return penggunaBaru;
  } catch (error) {
    throw new Error('Gagal membuat pengguna: ' + error.message);
  }
};

export const periksaKataSandi = async (user, kata_sandi2) => {
  try {
    return await bcrypt.compare(kata_sandi2, user.kata_sandi);
  } catch (error) {
    throw new Error('Gagal memeriksa kata sandi: ' + error.message);
  }
};

export const generateToken = (pengguna) => {
  const payload = {
    id_pengguna: pengguna.id_pengguna,
    email: pengguna.email,
  };

  const options = {
    expiresIn: '1d',
  };

  const token = jwt.sign(payload, secretKey, options);
  return token;
};

export const login = async (email, password) => {
  const user = await Pengguna.findOne({ where: { email } });

  if (!user) {
    throw new Error('Pengguna tidak ditemukan');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new Error('Kata sandi salah');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: '1d',
  });

  return token;
}

export default {
    createPengguna,
    penggunaById,
    semuaPengguna,
    periksaKataSandi,
    generateToken,
    login
}
