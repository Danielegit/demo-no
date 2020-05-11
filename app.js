//APP

const express = require('express')
const app = express();
const dotenv = require('dotenv')
const mysql = require('mysql');
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// .ENV conf
dotenv.config()

//VIEW engine handlebars config
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname+'/views/layouts/'}))
app.set('view engine', 'hbs');

// PORT 8080
const port = process.env.PORT ;
app.listen(port)

//Routes
const routes = require('./routes/routes')
app.use('/', routes);
app.use('/post', routes)
app.use('/goods', routes)


