import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.JWT_SECRET;

export const verifikasiToken = (req, res, next) => {
  const token = req.headers.authorization; // Token diberikan dalam header "Authorization"

  if (!token) {
    return res.status(401).json({ message: 'Token tidak ditemukan' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token tidak valid' });
    }

    req.id_pengguna = decoded.id_pengguna; // Menyimpan id_pengguna dalam request untuk penggunaan selanjutnya
    next(); // Lanjutkan ke rute selanjutnya
  });
};

export default verifikasiToken;
