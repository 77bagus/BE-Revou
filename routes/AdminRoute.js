import express from 'express';
import { verifikasiToken } from '../middlewares/Auth.js';
import AdminController from '../controllers/AdminController.js';

const router = express.Router();

// Middleware otentikasi diterapkan pada rute-rute di bawah ini
// router.use(verifikasiToken);

// Rute-rute yang memerlukan otentikasi untuk entitas Admin
router.get('/admin/:id_admin', AdminController.adminById);
router.get('/admin/', AdminController.semuaAdmin);
router.post('/buat-admin', AdminController.buatAdmin);
// Rute-rute lain yang memerlukan otentikasi untuk entitas Admin

export default router;
