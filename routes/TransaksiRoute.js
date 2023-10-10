import express from 'express';
import { verifikasiToken } from '../middlewares/Auth.js';
import TransactionController from '../controllers/TransaksiController.js';

const router = express.Router();

// Middleware otentikasi diterapkan pada rute-rute di bawah ini
// router.use(verifikasiToken);

// Rute-rute yang memerlukan otentikasi untuk entitas Transaction
router.get('/transaksi/:id_transaksi', TransactionController.transaksiById);
router.post('/buat-transaksi', TransactionController.buatTransaksi);
// Rute-rute lain yang memerlukan otentikasi untuk entitas Transaction

export default router;
    