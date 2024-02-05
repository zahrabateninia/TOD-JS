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
// 1: Using .then 
function getPersonsInfo(name){
    return server.getPeople().then( people =>{
        return people.find( person => {
            return person.name === name
        });
    });
}
