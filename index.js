const express = require("express");
const app = express();

const swaggerUI = require ('swagger-ui-express');
swaggerDocument = require('./swagger.json');

app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocument)
);

app.get("/addition/:a&:b", (req, res) => {
    const c = parseInt(req.params.a) + parseInt(req.params.b)
    res.send(c.toString())
  });

app.get("/substraction/:a&:b", (req, res) => {
    const c = parseInt(req.params.a)  - parseInt(req.params.b)
    res.send(c.toString())
  });
app.get("/multiplication/:a&:b", (req, res) => {
    const c = parseInt(req.params.a)  * parseInt(req.params.b)
    res.send(c.toString())
  });
  app.get("/division/:a&:b", (req, res) => {
    const c = parseInt(req.params.a)  / parseInt(req.params.b)
    res.send(c.toString())

  });         
app.listen(8001, () =>{
    console.log("server listening on port 8001");
});


