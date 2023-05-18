/* const request  = require("postman-request")


request ("https://dog.ceo/api/breeds/image/random" , ( err , res , body) => { 
  
    const {message , status} = JSON.parse(body) ;
  
}) 
request ("https://api.thecatapi.com/v1/images/search" , ( err , res , body) => { 
  
    const catapidata = JSON.parse(body) ;
 
    console.log( catapidata[0].url)
}
)  */

fetch ("https://dog.ceo/api/breeds/image/random").then( res => res.json() )
                                                .then ( data =>  console.log (data.message) )

fetch ("https://api.thecatapi.com/v1/images/search").then( res => res.json() )
                                                .then ( data =>  console.log (data[0].url) )
