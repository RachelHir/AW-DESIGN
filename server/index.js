const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose =require('mongoose')
const app = express();
const Product = require ("./models/product");
mongoose.connect('mongodb://localhost:27017/awdesign');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/dist')));
 
 app.get('/api/new',(req,res)=>{
     Product.find({ group:req.query.group }, { 'name': true, 'price': true }).then(products => {
        res.json(products);
     });
 })

  app.get('/api/new/product-details',(req,res)=>{
     Product.findById(req.query._id).then(product => {
        res.json(product);
     });
 })

 app.post('/api/admin',(req,res)=>{
     Product.create(req.body).then(() => {
        res.sendStatus(204);
     });
 })

app.all('*', (req, res) => {
  res.sendFile(path.resolve('./client/dist/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))