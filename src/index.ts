console.log('Hello world');
console.log(process.argv);

  if(process.argv.includes("--help"))  {
      console.log("je vais vous aider") 
    } 
  else if (process.argv.includes("--name")) { 
      console.log ("Bonjour " , process.argv[process.argv.indexOf('--name') + 1]) 
  }
    
interface Ipersonne {
  name : string,
  surname : string,
  gendar : string,
  age : number
}

const p: Ipersonne = {name : 'Reverdy', surname :'Alexandra', gendar :'f', age : 52}
console.log(p)

const personneModifiee: Ipersonne = {
  ...p,
  name: "Laforge",
  age: 26
}
personneModifiee.gendar = 'h'

console.log('personne modifiee', personneModifiee.gendar)

const p2: Ipersonne = {name : 'Laforge', surname :'Thomas', gendar : 'm', age : 31}
console.log(p2)

import fs from 'fs-extra'

const packageObj = fs.readJsonSync('./personne.json')
console.log(packageObj.version) // => 2.0.0



import express from 'express'
const app = express()
const port = 3000


app.get('/', (req, res) => {
  console.log('toto');
  res.send('Toto');
})

app.get('/date', (req, res) => {
  const currentdate = new Date ();
  console.log('date:', currentdate);
  res.send(JSON.stringify({Date: currentdate}));
})

app.get('/Thomas', (req, res) => {
  console.log('objetP2', p2)
  res.send(JSON.stringify(p2))
})

app.get('/fichier',)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
