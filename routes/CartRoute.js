import express from 'express';
import { verifikasiToken } from '../middlewares/Auth.js';
import cartController from '../controllers/CartController.js';

const router = express.Router();

// router.use(verifikasiToken);

router.get('/', cartController.semuaKeranjang);
router.get('/:id_keranjang', cartController.keranjangById);
router.post('/', cartController.buatKeranjang);

// Tambahkan rute lainnya sesuai kebutuhan (update dan delete)

export default router;
