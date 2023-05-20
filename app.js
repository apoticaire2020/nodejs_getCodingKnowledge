
const path = require('path')
const express = require('express')
const {engine} = require('express-handlebars')
const { nextTick } = require('process')

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')


app.use(express.static(path.join(__dirname , 'public')));

app.get('/', (req, res) => { res.render('home' ,
            {title : 'Home' , age : 25}
)});
app.get('/about', (req, res) => { res.render('about' ,
            {title : 'About' , name : "ali"})});
 
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
