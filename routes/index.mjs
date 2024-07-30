import expressss, { request, response } from "express";
import path from'path';

const router=expressss.Router();

router.get('/',(request,response)=>{
    response.render('index')
    console.log(path.dirname())
})

export default router