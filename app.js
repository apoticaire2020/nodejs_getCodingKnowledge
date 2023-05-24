
const path = require('path')
const express = require('express')
const {engine} = require('express-handlebars')

const { weather } = require('./utils/weather')

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')


app.use(express.static(path.join(__dirname , 'public')));


app.get('/', (req, res) => {
  // const {location , unit } = req.query;
  //  if (!location){ return res.send("erreur s est produite manq location"); } 
  //  else if (!unit) { return res.send("erreur s est produite manq unit"); }

  //  console.log(req.query)

  //  weather(  location, unit , (err, data) => { console.log( 'err' ,err)
  //              , console.log('Data' , data);})
  
  res.render('home')});


app.get('/weather', (req, res) => { 
  const { location  } = req.query;

  weather(  location , unit = 'm' , (err, data) => { 
   if (err) res.send(`erreur s est produite ${err}`)
  ; res.send(data);});
});


  
app.get('/about', (req, res) => { 
  res.render('about' ,
  {title : 'About' , name : "ali"})
});

 app.get('*', (req, res) => { res.render('404' ,
            {title : '404' })});
// app.use( (req , res , next) => {
//     res.status(404).render('404' ,
//               {title : '404'})
//  }
// )
app.use( ( err ,req , res , next) => {
   console.error(err.stack);
   res.status(500).send('erreur regarder terminal ')
 });



 
 app.listen(port , () => { console.log('listening on port' , port) })
