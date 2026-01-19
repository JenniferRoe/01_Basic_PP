/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */
const prompt = require("prompt-sync")({sigint: true});

// let name = prompt("What is your name?:");
// let age = parseInt(prompt("What is your age?:"));  
// let drink;

// if (age >= 0 && age <= 5) { 
//     drink = "Milk";
// } else if (age >= 6 && age <= 12) {
//     drink = "Juice";
// } else if (age >= 14 && age <= 17) {
//     drink = "Coke";
// } else if (age >= 18) {
//     drink = "Wine";
// } else {
//     drink = "...nothing";
// }
// console.log(name + " drinks " + drink + "!");

