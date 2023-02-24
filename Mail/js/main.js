'use strict';

const listaEmail = [
    "matteo@gmail.com", 
    "julie@gmail.com",
    "ron@gmail.com",
    "harry@gmail.com",
    "lyzz@gmail.com",
    "jones@gmail.com",
    "patrick@gmail.com",
];
const userInput = prompt("Inserisci la tua Email");
let access = false;

for (let i = 0; i < listaEmail.length; i++) {
    const email = listaEmail[i];

    if(email === userInput) {
        access = true
    } 
}

if (access === true) {
    alert("Benvenuto")
} else {
    alert("Accesso Rifiutato")
}
