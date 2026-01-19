
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/

// Repo: https://github.com/archive-Basic-P-25-09/02a_Bestellung
// Variante I linear
let choice;
let  food   = "kein Essen";
let  drink  = "kein Getränk";
const prompt = require('prompt-sync')({sigint: true});
console.log("------");
console.log("Herzlich Willkommen bei MD, Ihre Bestellung bitte!");
console.log("Hamburger(1), Cheeseburger(2), oder Chilliburger(3)?");
choice = parseInt(prompt("Ihre Auswahl?: "));
switch (choice) {
    case 1:
        food = "Hamburger";
        break;
    case 2:
        food = "Cheeseburger";
        break;
    case 3:
        food = "Chilliburger";
        break;
    default:
        food = "kein Essen";
        break;
}
console.log("------");
console.log("Möchten Sie ein Getränk dazu bestellen?");
choice =  prompt("y/n?: ").toLowerCase();
if (choice == "y") {
    console.log("------");
    console.log("Cola(1), Fanta(2) oder Sprite(3)?");
    choice = parseInt(prompt("Ihre Auswahl?: "));
    switch (choice) {
        case 1:
            drink = "Cola";
            break;
        case 2:
            drink = "Fanta";
            break;
        case 3:
            drink = "Sprite";
            break;
        default:
            drink = "kein Getränk";
            break;
    }
} 
console.log("------");
console.log("Hier ist Ihre Bestellung:");
console.log("-- " + food + " und " + drink + " --");
console.log("Auf Wiedersehen und noch einen schönen Tag!");
‎src/09b_codechallenge_III.js‎
+97
Lines changed: 97 additions & 0 deletions
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,97 @@
/***** Codechallenge III *****/
// ControlFlow / Funktionen
// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/
// Repo: https://github.com/archive-Basic-P-25-09/02a_Bestellung
// Variante II m. Funktionen
let choice;
let  food   = "kein Essen";
let  drink  = "kein Getränk";
const prompt = require('prompt-sync')({sigint: true});
order();
function order() {
    // Begrüßung
    output("------");
    output("Herzlich Willkommen bei MD, Ihre Bestellung bitte!");
    // Auswahl Essen
    food = orderFood();
    // Option Gertränk
    output("------");
    output("Möchten Sie ein Getränk dazu bestellen?");
    if (hasChoosenDrink()){
        drink = orderDrink();
    }
    // Ausgabe 
    output("------");
    output("Hier ist Ihre Bestellung:");
    output("-- " + food + " und " + drink + " --");
    output("Auf Wiedersehen und noch einen schönen Tag!");
}
// Essen
function orderFood() {
    output("Hamburger(1), Cheeseburger(2), oder Chilliburger(3)?");
    choice = getChoice();
    switch (choice) {
    case 1:
        return "Hamburger";
    case 2:
        return "Cheeseburger";
    case 3:
        return "Chilliburger";
    default:
        return "kein Essen";
    }
}
// Getränke
function orderDrink(choice) {
    output("------");
    output("Cola(1), Fanta(2) oder Sprite(3)?");
    choice = getChoice();
    switch (choice) {
    case 1:
        return "Cola";
    case 2:
        return "Fanta";
    case 3:
        return "Sprite";
    default:
        return "kein Getränk";
    }
}
// Getränk ?
function hasChoosenDrink() {
  return (prompt("y/n?: ").toLowerCase() == "y");
}
// Auswahl
function getChoice() {
    return parseInt(prompt("Ihre Auswahl?: "));
}
// Ausgabe
function output(outputData) {
   console.log(outputData); 
}

/***** Funktionen 02c *****/
// 02c. Mehrere Parameter / Argumente

// ausgabeNamen3();
ausgabeNamen3("Max", "Mütze");
// ausgabeNamen3("Max", "Mütze");

// Argumente werden von prompt() geliefert --> Input
const prompt = require('prompt-sync')({sigint: true});
ausgabeNamen3(prompt("Vorname: "),prompt("Name: "));
// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamen3(prompt("Vorname: "),prompt("Name: "));

function ausgabeNamen3(firstName, familyName) {  // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}                           
/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Max", "Mütze");

function ausgabeNamenSRP(firstName, familyName) {  // Parameter

    //1st responsibility: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    //2nd responsibility: string output
    console.log(outputStr);
}
/***** Funktionen 03b *****/
// 03b Verantwortlichkeiten in getrennte Funktionen auslagern   
//1st responsibility: string composing
 output(getString("Max","Mütze"));
function getString(firstName, familyName ) {                
    const GAP = " ";                                    
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"  
    output("test"); 
    return outputStr; // Fkt.- OUTPUT sendet Daten zum call 
    output("hi");  // Abbruch NACH return       
}
// 2nd responsibility: string output
// output("hi");
// output(2);
// output(true);
 function output(outputData) {
    console.log(outputData);
 }      


