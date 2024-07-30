import { render } from "ejs";
import expressss, { request, response } from "express";
import path from'path';

const router=expressss.Router();

router.get('/',(request,response)=>{
    response.render('home')
})

router.get('/about',(request,response)=>{
    response.render('home/about')
})

router.get('/popular',(request,response)=>{
    response.render('home/popular')
})

export default router