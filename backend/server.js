import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5002;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log('Server started at http://localhost:5001');
    connectMongoDB();
})