import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://mayank:mayank2112@soical-media.wuiqgz6.mongodb.net/social_media?retryWrites=true&w=majority&appName=soical-media').then(
    ()=>{console.log('Database is connected!');}).catch(
        (err)=>{console.log(err)}
    );
const app = express();

app.listen(3000,()=>{
    console.log('Server is running on port 3000!!');
})