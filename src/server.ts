import express from 'express';
import dotenv from 'dotenv'
import router from './router.js';
import { connectDB } from './config/db.js'

const app = express();

dotenv.config()
connectDB()

app.use( express.json() )
app.use('/',router)

export default app;