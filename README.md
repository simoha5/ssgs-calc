# 📐 SSGS Calc

**SSGS Calc** è una semplice calcolatrice da terminale sviluppata in **JavaScript (Node.js)**. Offre operazioni matematiche di base con una **CLI user-friendly** e supporto per test automatici tramite **Jest**.

## ✨ Funzionalità
- ✅ 1-Addizione
     2-sottrazione
     3-moltiplicazione 
     4-divisione
- 🔁 Esecuzione continua finché l'utente non decide di uscire
- 💥 Gestione degli errori (es. divisione per zero)
- 🧪 Test automatizzati con Jest
- 🧑‍💻 Codice modulare e facilmente estendibile

## 🧰 Requisiti
- [Node.js](https://nodejs.org/) **versione 22** o superiore

## 🚀 Installazione
Clona il repository ed entra nella cartella del progetto:
```bash
git clone https://github.com/simoha5/ssgs-calc
cd ssgs-calc
```

Installa le dipendenze:
```bash
npm install
```

## ▶️ Utilizzo
Esegui la calcolatrice tramite:
```bash
node src/index.js
```

Segui le istruzioni a schermo per scegliere un'operazione e inserire i numeri.

## 🧪 Eseguire i Test
Per lanciare i test automatici scritti con Jest, usa:
```bash
npm test
```

Per verificare la code coverage (obiettivo 100%):
```bash
npm test -- --coverage
```

Puoi visualizzare il report dettagliato della coverage aprendo il file `coverage/lcov-report/index.html` nel tuo browser.

## 🔄 Continuous Integration

Il progetto è configurato con GitHub Actions per eseguire automaticamente i test e verificare la code coverage ad ogni push e pull request verso i branch principali.

La pipeline CI:
- Esegue tutti i test automatici
- Verifica che la code coverage sia al 100%
- Genera e salva il report di coverage come artefatto scaricabile

Puoi visualizzare i risultati della CI nella sezione "Actions" del repository GitHub.

## 👨‍💻 Autore
**simoha5** – Creatore e sviluppatore principale
