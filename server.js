import express from 'express'
const app=express();
import { dummyBlogData } from './dummyData/postArray.js';
const PORT=4000;


app.get('/',(req,res)=>{
    res.send("Welcome to express blog server");
})

app.get('/post',(req,res)=>{
    res.send(dummyBlogData)
})

app.listen(PORT,()=>{
    console.log("App is listening on PORT=",PORT);
})