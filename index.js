const express=require('express');
const cors =require('cors');
const routerApi=require('./routes');
const {logErrors,errorHandler,boomErrorHandler} =require('./middleware/error.handler');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
  res.send('Hola mi server en express');
});
app.use(express.json());
app.use(cors());
app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola, soy una nueva ruta');
});
routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port,()=>{
  console.log('Mi port' + port);
});