const express = require('express');
const app = express();

app.use('/manager/api/analysis',require('./routes/analysisRouter'));

app.listen('5000',(error)=>{
    console.log('启动了' , error);
})