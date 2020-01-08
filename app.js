const path=require('path')

const express=require('express');

//const routeDir=require('../util/path');
const bodyParser=require('body-parser');
const app=express();

const errorController= require('./controllers/error');

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
