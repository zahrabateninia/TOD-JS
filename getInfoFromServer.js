#!/usr/bin/env node

const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ],
  
    getPeople() {
      return new Promise((resolve, reject) => {
        // Simulating a delayed network call to the server
        setTimeout(() => {
          resolve(this.people);
        }, 2000);
      });
    },
  };

//  Get info from the server, process it and return a promise:

// 1: .then 
// function getPersonsInfo(name){
//     return server.getPeople().then( people =>{
//         return people.find( person => {
//             return person.name === name
//         });
//     });
// }

// 2: async await
async function getPersonsInfo(name) {
    try {
      const people = await server.getPeople();
      const person = people.find(person => { return person.name === name });
      return person;
    } catch (error) {
      // Handle the error
    }
  }
getPersonsInfo("Thor")
    .then( result => {
        console.log(result)
    })
    .catch( error =>{
        console.log(error)
    });

