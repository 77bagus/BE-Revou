// import express, { Router } from "express";
// import dotenv from "dotenv";
// import sequelize from "./config/database.js";
// import {startSequelize} from "./config/startSequelize.js";
// import cors from "cors";

// import "./models/index.js";

// dotenv.config();

// const app = express();
// const router = Router();
// const port = process.env.PORT;

// app.use(express.urlencoded());
// app.use(express.raw());
// app.use(express.json());
// app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); 
//   next();
// });

// app.use(express.static("node_modules/bootstrap/dist"));
// app.use(express.static("public"));

// app.use("/books", express.static("public/books.html"));

// // router.use("/api/books", booksRouter);
// app.use(router);

// startSequelize(sequelize);

// // app.use(`/.netlify/functions/api`, router);

// app.listen(port, () => {
//   console.log(`Server is running at port ${port}`);
// });

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './config/database.js'; // Pastikan Anda telah mengimpor instance Sequelize

// Impor rute-rute yang telah Anda buat
// import authRoutes from './routes/authRoutes'; // Rute otentikasi (masuk, pendaftaran)
import orderRoutes from './routes/OrderRoute.js'; // Rute untuk entitas Order
import adminRoutes from './routes/AdminRoute.js'; // Rute untuk entitas Admin
import transactionRoutes from './routes/TransaksiRoute.js'; // Rute untuk entitas Transaction
import categoryRoutes from './routes/CategoryRoute.js'; // Rute untuk entitas Category
import cartRoutes from './routes/CartRoute.js'; // Rute untuk entitas Cart
import productRoutes from './routes/ProductRoute.js'; // Rute untuk entitas Product
import userRoutes from './routes/UserRoute.js'; // Rute untuk entitas User

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended : false}));

// Rute-rute aplikasi
app.get('/', (req, res)=> {
  res.send('Hello World!');
})
app.use('/order', orderRoutes);
app.use('/admin', adminRoutes);
app.use('/transaction', transactionRoutes);
app.use('/category', categoryRoutes);
app.use('/cart', cartRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);

// Koneksi ke basis data menggunakan Sequelize
sequelize.sync().then(() => {
    console.log('Koneksi ke basis data berhasil');
  })
  .catch((error) => {
    console.error('Gagal terhubung ke basis data:', error);
  });

// Port yang akan digunakan oleh server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
