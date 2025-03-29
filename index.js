// index.js
const readline = require('readline-sync');
const math = require('./math');

    console.log("🔢 Benvenuto nella Calcolatrice CLI!");
    console.log("🔢 Puoi eseguire operazioni di addizione, sottrazione, moltiplicazione e divisione.");
    console.log("🔢 Per uscire, digita '5' quando richiesto.");
while (true) {
    console.log("Scegli un'operazione:");
    console.log("1 - Addizione");
    console.log("2 - Sottrazione");
    console.log("3 - Moltiplicazione");
    console.log("4 - Divisione");
    console.log("5 - Esci");

    const scelta = readline.question("Inserisci il numero dell'operazione: ");

    if (!["1", "2", "3", "4", "5"].includes(scelta)) {
        console.log("Errore: operazione non valida!");
        continue; // Restart the loop instead of exiting
    }

    if (scelta === "5") {
        console.log("Uscita...");
        break; // Exit the loop
    }

    const num1 = parseFloat(readline.question("Inserisci il primo numero: "));
    const num2 = parseFloat(readline.question("Inserisci il secondo numero: "));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Errore: inserisci numeri validi!");
        continue; // Restart the loop instead of exiting
    }

    let risultato;
    switch (scelta) {
        case "1":
            risultato = math.add(num1, num2);
            break;
        case "2":
            risultato = math.subtract(num1, num2);
            break;
        case "3":
            risultato = math.multiply(num1, num2);
            break;
        case "4":
            try {
                risultato = math.divide(num1, num2);
            } catch (error) {
                console.log(error.message);
                continue; // Restart the loop instead of exiting
            }
            break;
    }

    console.log(`Risultato: ${risultato}`);
}

console.log("Grazie per aver usato la Calcolatrice CLI! 👋");