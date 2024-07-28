
import express from 'express';
import expressEjsLayouts from "express-ejs-layouts";
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { readFile } from 'fs/promises';
import path from 'path';
const app=express();
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
import router from './routes/index.mjs';
import { error } from 'console';


async function loadEnv() {
    if (process.env.NODE_ENV !== 'production') {
        const envPath = path.join(__dirname, '.env');
        const envConfig = await readFile(envPath, 'utf8');
        dotenv.config({ path: envPath });
        console.log("WORKING BROOO")
        console.log("checking")
    }
}
await loadEnv()
app.set('view engine','ejs')
app.set('views',path.join(__dirname+'/views'))
app.use(express.static(path.join(__dirname,'public')))
app.set('layout','layouts/layouts')
app.use(expressEjsLayouts)
app.use('/',router)


app.listen(process.env.PORT || 3000)