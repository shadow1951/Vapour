import { render } from "ejs";
import expressss, { raw, request, response } from "express";
import path from'path';
import { details, } from "../mongoose/schema/games.mjs";
import mongoose from "mongoose";
const router=expressss.Router();
router.use(expressss.json())

router.get('/',(request,response)=>{
    response.render('home')
})

router.get('/about',(request,response)=>{
    response.render('home/about')
})

router.get('/popular',(request,response)=>{
    response.render('home/popular')
})
router.get('/popular',(request,response)=>{
    response.render('home/popular')
})
router.get('/game',(request,response)=>{
    response.render('home/game')

})
router.post('/upload',async(request,response)=>{
    const {body}=request
    const newGame=new details(body)
    try{
            const savedGame=await newGame.save();
            response.send(savedGame)
    }
    catch(error){
        response.send("Game name already exists");
    }
})

export default router