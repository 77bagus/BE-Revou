import express from 'express';
import { verifikasiToken } from '../middlewares/Auth.js';
import OrderController from '../controllers/OrderController.js';

const router = express.Router();

// Middleware otentikasi diterapkan pada rute-rute di bawah ini
// router.use(verifikasiToken);

// Rute-rute yang memerlukan otentikasi untuk entitas Order
router.get('/pesanan', OrderController.semuaPesanan)
router.get('/pesanan/:id_pesanan', OrderController.pesananById);
router.post('/buat-pesanan', OrderController.buatPesanan);
// Rute-rute lain yang memerlukan otentikasi untuk entitas Order

export default router;
