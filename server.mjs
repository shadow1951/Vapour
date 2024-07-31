
import express from 'express';
import expressEjsLayouts from "express-ejs-layouts";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { readFile } from 'fs/promises';
import path from 'path';
const app=express();
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
import indexRouter from './routes/index.mjs';
import homeRouter from './routes/home.mjs';
import { MongoClient } from 'mongodb';
import { error } from 'console';


async function loadEnv() {
    if (process.env.NODE_ENV !== 'production') {
        console.log(__dirname)
        const envPath = path.join(__dirname,'.env');
        const envConfig = await readFile(envPath, 'utf8');
        console.log(envPath)
        dotenv.config({ path: envPath });
        console.log("WORKING BROOO")
        console.log("checking")
        const DATABSE_URL=process.env.DATABSE_URL;
        mongoose.connect(DATABSE_URL)
    }
}
await loadEnv()

app.set('view engine','ejs')
app.set('views',path.join(__dirname+'/views'))
app.use(express.static(path.join(__dirname,'public')))
app.set('layout','layouts/layouts')
app.use(expressEjsLayouts)
app.use('/index',indexRouter)
app.use('/home',homeRouter)



app.listen(process.env.PORT || 3000)