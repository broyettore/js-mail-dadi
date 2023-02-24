# Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## Problem-Solving

### Step 1 Creare una  lista di email  che avrà accesso al sito

*  Creo un array con al suo interno una lista di email per accedere al sito.

### Step 2 Chiedere all'utente la sua email

* Creo una variabile1 a cui assegno un prompt.
* Creo una variabile2 a cui assegno il valore false.

### Step 3 Filtrare gli utenti

* All'interno di un ciclo, creo un variabile3 a cui assegno il contenuto dell'array.
* Creo una condizione per cui SE la variabile1 corrisponde alla variabile3 allora la variabile2 diventa True.
* Adesso fuori dal ciclo, creo una condizione per cui SE la variabile2 è True allora facciamo accedere l'utente altrimenti no.

# Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?

## Problem-Solving

### Step 1 Stabilire come generare un numero random da 1 a 6

* Usiamo Math.random() che ci darà un numero da 0 a 1
* Per ottenere un numero da 1 a 6, facciamo (Math.random() * 5) +1
* Inseriamo il risultato in Math.floor per avere un numero intero

### Step 2 Creare delle variabili per giocatore e computer

* Creo una variabile1 a cui assegnare il calcolo del numero random del giocatore.
* Creo una variabile2 a cui assegnare il calcolo del numero random del computer.

### Step 3 Stabilire il vincitore

* Creo delle condizoni per stabilire il vincitore
* SE variabile1 > variabile2, alert("vince il giocatore")
* ALTRIMENTI SE variabile2 > variabile1, alert("vince il computer")
* ALTRIMENTI, variabile2 === variabile1, alert("Pareggio")