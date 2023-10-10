import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './config/database.js'; 

import orderRoutes from './routes/OrderRoute.js'; 
import adminRoutes from './routes/AdminRoute.js'; 
import transactionRoutes from './routes/TransaksiRoute.js'; 
import categoryRoutes from './routes/CategoryRoute.js'; 
import cartRoutes from './routes/CartRoute.js'; 
import productRoutes from './routes/ProductRoute.js'; 
import userRoutes from './routes/UserRoute.js'; 

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended : false}));

app.get('/', (req, res)=> {
  res.send('Hello World!');
})
app.use('/pesanan', orderRoutes);
app.use('/admin', adminRoutes);
app.use('/transaksi', transactionRoutes);
app.use('/kategori', categoryRoutes);
app.use('/keranjang', cartRoutes);
app.use('/produk', productRoutes);
app.use('/profil', userRoutes);

sequelize.sync().then(() => {
    console.log('Koneksi ke Database berhasil');
  })
  .catch((error) => {
    console.error('Gagal terhubung ke Database:', error);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
