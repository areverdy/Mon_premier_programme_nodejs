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