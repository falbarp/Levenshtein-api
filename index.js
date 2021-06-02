const express = require("express");
const app = express();

const levenshtein = require('fast-levenshtein');

const swaggerUI = require ('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocument)
);

app.get("/distance/:a&:b", (req, res) => {
    const distance = (levenshtein.get(req.params.a, req.params.b)).toString()
    res.send(distance)
  });

       
app.listen(8001, () =>{
    console.log("Server listening on port 8001");
});


app.use((err,req,res,next)=>{
   res.status(404).json({
       error : {
           message : err.message
      }
   });
})