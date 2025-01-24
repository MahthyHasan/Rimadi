import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import accountRoutes from './routes/account.routes.js';
import connectMongoDB from './db/connectMongoDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 5002;
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, 
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/account", accountRoutes);

app.listen(port, () => {
    console.log('Server started at http://localhost:5001');
    connectMongoDB();
})