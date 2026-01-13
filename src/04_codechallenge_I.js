
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// const berechnung = require('prompt-sync')({sigint: true});
// let ersteZahl = berechnung("Geben Sie die erste Zahl ein: ");
// let zweiteZahl = berechnung("Geben Sie die zweite Zahl ein: ");
// let summe = parseInt(ersteZahl) + parseInt(zweiteZahl);
// console.log("Die Summe der Zahlen ist: " + summe);
 

// 
/*********   CODE CHALLENGE 03 const+ Prozent **********/

// const preis = 79.77;
// const mwst = 0.19;
// const bruttoPreis = preis + (preis * mwst);
// console.log("Der Bruttopreis betraegt: " + bruttoPreis + " Euro");

// // ODER

// const prozent = (30/200) * 100;
// console.log("30 ist " + prozent + "% von 200");

/********* Weitere Beispiele *********/

const prompt = require('prompt-sync')({sigint: true});

/*********** Variante 1  ****************/
// Vorteil: gute Lesbarkeit | aber viele Variablen

// let ziffer1, ziffer2, zahl1, zahl2, summe;

// ziffer1 = prompt("Bitte Zahl 1 eingeben: ");
// ziffer2 = prompt("Bitte Zahl 2 eingeben: ");

// console.log("Datentyp: " + typeof ziffer1);
// console.log("Datentyp: " + typeof ziffer2);

// // Typkonvertierung 1: ziffer --> zahl (mit Nachkomma)
// zahl1 = parseFloat(ziffer1);
// zahl2 = parseFloat(ziffer2);

// console.log("Datentyp: " + typeof zahl1);
// console.log("Datentyp: " + typeof zahl2);

// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

/*********** Variante 2  ****************/

// Kompaktere Lösung

// let zahl1, zahl2, summe;

// zahl1 = parseInt(prompt("Zahl 1: "));
// zahl2 = parseInt(prompt("Zahl 2: "));

// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

/*********** Variante 3  ****************/
// Kompakt, aber schlechter lesbar, unflexibel

// console.log
// (
//     "Die Summe ist: " + 
//    (
//     parseFloat(prompt("Bitte Zahl 1 eingeben: ")) +
//     parseFloat(prompt("Bitte Zahl 2 eingeben: "))
//    ) 





