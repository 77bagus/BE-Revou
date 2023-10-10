import express from 'express';
import { verifikasiToken } from '../middlewares/Auth.js';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', ProductController.semuaProduk);
router.get('/produk/:id_produk', ProductController.produkById);

// Rute-rute yang memerlukan otentikasi untuk entitas Product
// router.use(verifikasiToken);
router.post('/buat-produk', ProductController.buatProduk);
// Rute-rute lain yang memerlukan otentikasi untuk entitas Product
export default router;
