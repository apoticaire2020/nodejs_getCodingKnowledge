const { readFileSync , writeFileSync} = require("fs");

const mydata = JSON.parse(readFileSync('./mydata.json' , 'utf8'));


console.log(mydata.name);

//writeFileSync('./mydata.json', objtojson);
mydata.name = 'ali zawa';

const objtojson = JSON.stringify(mydata);
//writeFileSync('./mondata.json', objtojson);