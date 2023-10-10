import express from 'express';
import { verifikasiToken } from '../middlewares/Auth.js';
import CategoryController from '../controllers/CategoryController.js';

const router = express.Router();

// Middleware otentikasi diterapkan pada rute-rute di bawah ini
// router.use(verifikasiToken);

// Rute-rute yang memerlukan otentikasi untuk entitas Category
router.get('/kategori/:id_kategori', CategoryController.kategoriById);
router.post('/buat-kategori', CategoryController.buatKategori);

// Rute-rute lain yang memerlukan otentikasi untuk entitas Category

export default router;
