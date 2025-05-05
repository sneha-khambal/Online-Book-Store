import express from 'express';

const app =express();
app.use(express.json()) 

app.get('/',(req,res)=>{
    console.log('Node application running')
})

app.listen('3001',()=>{console.log('app runing on 3001')})