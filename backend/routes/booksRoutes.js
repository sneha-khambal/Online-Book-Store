import express from 'express';
const router = express.Router();


router.get('/',(req,res)=>{
   return res.status(234).send('Node application running');
   
});



export default router;