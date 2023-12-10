const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");
});

app.get("/products", (req, res) =>{
  res.json([
    {
      name: 'product 1',
    price:400
  },
  {
    name: 'product 2',
    price:4000
  },
  ]);
});

app.get('/products/:id',(req,res)=>{
  const {id} = req.params;
  res.json({
    id,
    name: 'product 2',
    price:4000
  })
})

app.get('/categories/:categoryId/products/:productsId',(req,res)=>{
  const {categoryId,productsId} = req.params;
  res.json({
    categoryId,
    productsId,
    name: 'product 2',
    price:4000
  })
})

app.listen(port, () =>{
  console.log("My port: " + port);
});



// const express = require('express');

// const productsRouter = require('./products.router');
// const categoriesRouter = require('./categories.router');
// const usersRouter = require('./users.router');

// function routerApi(app) {
//   const router = express.Router();
//   app.use('/api/v1', router);
//   router.use('/products', productsRouter);
//   router.use('/categories', categoriesRouter);
//   router.use('/users', usersRouter);
// }

// module.exports = routerApi;