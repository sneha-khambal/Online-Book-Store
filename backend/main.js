import express from 'express';
import bookRoutes from './routes/booksRoutes.js'
const app =express();
app.use(express.json()) 

app.use('/',bookRoutes)

app.listen('3001',()=>{console.log('app runing on 3001')})