import express from 'express';


/** */
var app=express();
var PORT=3000;







var webserver=app.listen(PORT,()=>{
    console.log("Listening on port: "+webserver.address().port);
});