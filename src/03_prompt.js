// --> installiern mit: npm i prompt-sync

const eineUeberraschung = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen! ...
let firstWord = eineUeberraschung("1stWord?: ");
let secondWord = eineUeberraschung("2ndWord?: ");
console.log("Ich bin in meiner " + firstWord + " " + secondWord +"!");