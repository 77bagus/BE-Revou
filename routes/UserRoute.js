import express from 'express';
import userController from '../controllers/UserController.js';

const router = express.Router();

// Rute untuk mendapatkan semua pengguna
router.get('/', userController.semuaPengguna);

// Rute untuk mendapatkan pengguna berdasarkan ID
router.get('/:id_pengguna', userController.penggunaById);

// Rute untuk membuat pengguna baru
router.post('/', userController.createPengguna);

router.post('/login', userController.login)

// Tambahkan rute lainnya sesuai kebutuhan (misalnya, rute untuk memperbarui atau menghapus pengguna)

export default router;
