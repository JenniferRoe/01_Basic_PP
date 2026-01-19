
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */



/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                PUNCT;

    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */
let arr;
// arr = new Array();
arr = [];
arr = [2,11,7,8,10,20];  // Arr. mit Elementen

console.log(arr);
console.log(arr.length); // Anzahl der Elemente (n)
console.log(arr[0]); // Index 0 (1. Pos. im Array)
console.log(arr[5]);
console.log(arr[arr.length-1]); // letze Pos. / allgemein











/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + 
                PUNCT;

    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

/*** 02. Funktionalität mit Array-Parameter */
// --> "Ich bin Max Mütze."
// output(getSentenceFromArray(["Ich","bin","Max","Mütze"]));           

function getSentenceFromArray(wordArray) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   wordArray[0] + GAP +
                wordArray[1] + GAP +
                wordArray[2] + GAP +
                wordArray[3] + 
                PUNCT;      
    return str;
}   
// --> "Ich bin die coole Maxine Mützerich."
// output(getSentenceFromArray(["Ich","bin","die","coole","Maxine","Mützerich"]));  

/*** 03. Erweiterte Funktionalität mit Array-Parameter */   

// --> "Ich bin Max Mütze."
// output(getSentenceFromArrayAdv(["Ich","bin","Max","Mütze"]));

function getSentenceFromArrayAdv(wordArray) {

    const GAP = " ";
    const PUNCT = ".";
    let str = "";               
    for (let i = 0; i < wordArray.length; i++) {
        str += wordArray[i];



        // Leerzeichen nur hinzufügen, wenn nicht das letzte Wort
        if (i < wordArray.length - 1) {
            str += GAP;
        }           

    }
    str += PUNCT;      
    return str;
}       
// --> "Ich bin die coole Maxine Mützerich."
// output(getSentenceFromArrayAdv(["Ich","bin","die","coole","Maxine","Mützerich"]));       


// Ende src/11_arrays_I.js */   
